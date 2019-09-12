const express = require("express");
const router = new express.Router();
const userModel=require("./../models/Users")
const testModel=require("./../models/Tests")
const  bcrypt=require("bcrypt")


router.post("/signup", (req, res, next) => {
    

  const user = req.body;
  console.log(user)

    userModel
      .findOne({ email: user.email })
      .then(dbRes => {
        if (dbRes) {
          res.render("login", { errorMsg: "User already exists !" });
          return;
        }
        const salt = bcrypt.genSaltSync(10); 
        const hashed = bcrypt.hashSync(user.password, salt);
 
        user.password = hashed;
        userModel
          .create(user)
          .then(() => res.render("user",{user}))
          .catch((err)=>console.log(err));
      });
});


router.post("/login", (req, res, next) => {
  const user = req.body;

  userModel
    .findOne({ email:user.email })
    .then(dbRes => {
      if (!dbRes) {
        res.render("login", { errorMsg: "Bad username or password" });
        return;
      }
      if (bcrypt.compareSync(user.password, dbRes.password)) {
        console.log("====== current user")
        req.session.currentUser = dbRes;
        console.log(dbRes)
        
         
              res.redirect("/user")
              // console.log(testList)
          
          //  .then((dbRes)=>{
          //    res.render("user",{user:dbRes, tests:testList});//I needed two then because the scope of testList was not visible once it was outside of the testModel.find() promise. so I had to immediately put then after it got the data and in the second then, i rendered it
          //  })
        return;
      } 
      
      else {
        res.render("login", { errorMsg: "Bad username or password" });
        return;
      }
    })
    .catch(dbErr => {
      next(dbErr);
    });
    
});

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		res.locals.loggedin = 'false';
		res.redirect('/');
	});
});


  module.exports = router;