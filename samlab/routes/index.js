const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/about",(req,res)=>{
  res.render("about");
});

router.get("/contact_us",(req,res)=>{
  res.render("contact_us");
});

router.get("/login",(req,res)=>{
  res.render("login");
});




module.exports = router;
