const express = require("express");
const router = new express.Router();
const userModel=require("./../models/Users")
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
      if (!user) {
        res.render("login", { errorMsg: "Bad username or password" });
        return;
      }
      if (bcrypt.compareSync(user.password, dbRes.password)) {
        // req.session.currentUser = user;
        res.render("user",{user:dbRes});
        return;
      } else {
        res.render("login", { errorMsg: "Bad username or password" });
        return;
      }
    })
    .catch(dbErr => {
      next(dbErr);
    });
});


  module.exports = router;