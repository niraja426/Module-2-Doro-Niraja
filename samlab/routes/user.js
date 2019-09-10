const express = require('express');
const router  = express.Router();
const userModel=require("./../models/Users")

/* GET home page */
router.get('/user', (req, res, next) => {
  res.render('user');
});


router.get('/login/:id', (req, res, next) => {
  console.log('body:', req.body, 'id:', req.params.id);
  
  userModel.findById( {_id:req.params.id} )
  .then((dbRes) => {
    res.render('edit_profile', {user:dbRes})
  })
  .catch((dbErr) => {
    console.log('can not update proberly', dbErr)
    res.redirect('/login')
  });
});


module.exports = router;
