const express = require('express');
const router  = express.Router();
const testModel=require("./../models/Tests")
const userModel=require("./../models/Users")
const userTest = require("../models/User_test")


/* --- GET home page --- */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/about",(req, res, next) =>{
  res.render("about");
});

router.get("/contact",(req, res, next) =>{
  res.render("contact_us");
});

router.get("/login",(req, res, next) =>{
  res.render("login");
});


/* --- POST home page reqests --- */
router.post("/message-sent", (req, res, next) => {
  res.render("message_sent");
})




// router.post('/submittest/:id', (req, res,next) => {
// const {testList}=req.body;
// console.log(req.body)
//  console.log(req.session.currentUser)

//  userTest.create({
//    user_id: req.params.id,
//    test_ids: req.body.testList
//  }).then(userTest => {
//    console.log(userTest)
//    res.render("/user")
//  }).catch(err => console.log(err))

// });







module.exports = router;
