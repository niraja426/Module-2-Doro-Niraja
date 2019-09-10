const express = require('express');
const router  = express.Router();
const testModel=require("./../models/Tests")
const userModel=require("./../models/Users")

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


router.post('/submittest/:id', (req, res,next) => {
const {testList}=req.body;
console.log(req.body)
 console.log(req.session.currentUser)
//  userModel.findById(req.params.id)
//  .then(()=>{
//   const newTest=new testModel({
//     test_ids:testList,
//     user_id:req.params.id
    
//   })

//  })
    });







module.exports = router;
