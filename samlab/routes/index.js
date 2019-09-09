const express = require('express');
const router  = express.Router();

/* GET home page */
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

router.get("/contact/message_sent", (req, res, next) => {
  res.render("message_sent");
})



module.exports = router;
