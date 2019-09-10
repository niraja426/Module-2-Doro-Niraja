const express = require('express');
const router  = express.Router();

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


// router.post('/submittest', (req, res,next) => {
 


//    const newMovie=new movieModel({
//      title:req.body.title,
//      genre:req.body.genre,
//      plot:req.body.plot
//    })
//    .save()
//    .then((dbRes)=>{
//      res.redirect('/movies');
//    })
//    .catch((error)=>{
//        console.log("cannot save the movie properly")
//        res.redirect('/movies/newmovie')
//    })

//  });







module.exports = router;
