const express = require('express');
const router  = express.Router();
const nodemailer   = require("nodemailer")
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
// router.post("/message-sent", (req, res, next) => {
//   res.render("message_sent");
// })

// router.post('/message-sent', (req, res, next) => {
//   let { email, subject, message } = req.body;
//   res.render('message_sent', { email, subject, message })
// });

// let transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD 
//   }
// });

router.post('/message-sent', (req, res, next) => {
  console.log(req.body)
  let { email, subject, message,username} = req.body;
 
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  transporter.sendMail({
    from: email,
    to: process.env.EMAIL, 
    subject: subject, 
    text: message,username,email,
    html: `<b>${message}</b>`
  })
  .then(info => res.render('message_sent', {email, subject, message,}))
  .catch(error => console.log(error));
});



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
