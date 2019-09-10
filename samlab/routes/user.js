const express = require('express');
const router  = express.Router();
const userModel=require("./../models/Users")
const testModel = require("../models/Tests")
const bcrypt = require("bcrypt")
/* GET home page */
router.get('/user', (req, res, next) => {
  testModel.find()
  .then((testList)=>{

    console.log(req.session.currentUser)
      res.render("user",{ tests:testList, user:req.session.currentUser});
      // console.log(testList)
   })
  //  .then((dbRes)=>{
  //    res.render("user",{user:dbRes, tests:testList});//I needed two then because the scope of testList was not visible once it was outside of the testModel.find() promise. so I had to immediately put then after it got the data and in the second then, i rendered it
  //  })
 .catch((err)=>{
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
console.log(req.body  , "here")
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

module.exports = router;
