const express = require('express');
const router  = express.Router();

router.post("/contact_us_message", (req, res, next) => {
    res.redirect("/contact/message_sent");
})


module.exports = router;