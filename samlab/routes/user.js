const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/user', (req, res, next) => {
  res.render('user');
});



module.exports = router;
