const express = require('express');
const router  = express.Router();
const userModel=require("./../models/Users");
const testModel = require("../models/Tests");
const userTest = require("../models/User_test"); 
const axios=require("axios");
const bcrypt = require("bcrypt");


function getUserPreviousTests(id) {
  return userTest.find({user_id: id}).populate("test_ids");
}


/* GET home page */
router.get('/user', (req, res, next) => {
  getUserPreviousTests(req.session.currentUser._id)
  .then(userTests => {
    // console.log( "user tests : ", userTests)
    testModel.find()
    .then(testList =>{
      // console.log("test lists", testList)
   
        res.render("user",{
          tests: testList,
          user: req.session.currentUser,
          userTests: userTests,

          // scripts: ["pppp.js"]
        });
     })
  })
 .catch((err) => {
    console.log("couldnot retrive the tests")
  });
});


router.get('/login/:id', (req, res, next) => {
  console.log('body:', req.body, 'id:', req.params.id);
  userModel.findById( {_id:req.params.id} )
  .then((dbRes) => {
    res.render('edit_profile', {user:dbRes})
  })
  .catch((dbErr) => {
    console.log('can not update proberly', dbErr)
    res.redirect('/login')
  });
});


/* POST request of home page */

router.post('/login/:id', (req, res, next) => {
// todo some validation before maybe
// /console.log(req.body  , "here")
  userModel.findByIdAndUpdate(req.params.id, req.body, {new : true}) //must new true
  .then((updatedUser) => {
      req.session.currentUser = updatedUser
      res.redirect('/user')
    
    // req.session.currentUser = updatedUser
  // and show the loged in profile
  })
  .catch((dbErr) => {console.log("there occured an error", dbErr)}
  )
});


// capturing the ajax request
router.post("/user/test-submit", (req,res)=>{
  //console.log(req.body);
  // req.body holds the values stored in variablename "data" coming from axios post request
  // now, we enter this data(checked tests ) into database "user_test"

  // console.log(">>>>>", req.session.currentUser._id)
  test_idsList=req.body.data;
  var dataToInsert=[];
  var date=new Date();
  test_idsList.forEach((element)=>{
    myObject={
      user_id: req.session.currentUser._id,
        test_ids:element,
        status:"Pending",
        date: date
    }

    dataToInsert.push(myObject);


  })

   userTest.insertMany(dataToInsert)
      .then(dbRes => { //upon successful insertion of data into database,we search for these corresponding ids(which was in "data" variable) in the tests collection 
      console.log("/n ******************after insert Many")
      console.log(dbRes)
      var testIdsToSearch=[];
         dbRes.forEach((element)=>{
           testIdsToSearch.push(element.test_ids)

         })
          testModel.find({'_id': { $in: testIdsToSearch}})
          .then((dbResafterFind)=>{//after successful finding of these tests ,we send the find result(dbResafterFind) and dbRes in variable names "tests"and "userTests" respectively back to ajax
            res.send({tests:dbResafterFind, userTests:dbRes})// now go back to axios

          })
          .catch((err)=>{
            console.log(err)
          })
    
         
      })
      .catch(err => console.log(err))

      
      
})


// axios.delete(URL, {
//   data: response
//  })
router.delete('/user/delete/:id', (req, res, next) => {
  console.log("I am inside delete");
  console.log(req.params.id)
  userTest.findByIdAndDelete(req.params.id)
  .then((dbRes) => {
    res.send("deleted")
  })
  .catch((dbErr) => {
    console.error(dbErr)
  })
  
  
})
  // userModel.findById( {_id:req.params.id} )
  // .then((dbRes) => {
  //   res.render('edit_profile', {user:dbRes})
  // })
  // .catch((dbErr) => {
  //   console.log('can not update proberly', dbErr)
  //   res.redirect('/login')
  // });



module.exports = router;
