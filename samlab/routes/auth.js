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



  module.exports = router;