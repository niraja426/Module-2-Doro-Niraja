const express = require('express');
const router  = express.Router();
const nodemailer   = require("nodemailer")
const testModel=require("./../models/Tests")
const userModel=require("./../models/Users")
const userTest = require("../models/User_test")



router.get('/user/add-test', (req, res,next) => {
            res.render('add_test');
   });


   router.post('/user/add-test', (req, res,next) => {
      console.log("i am inside the post")
 
      const {name, price ,description,normal_value} =req.body;
       testModel.create({name, price ,description,normal_value})
       .then((dbRes)=>{
         res.redirect('/user');
       })
       .catch((error)=>{
           console.log("cannot save the test properly")
         })
      
       });
  


module.exports = router;