const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mail-controller");


router.route('/sendmail').post(mailController.sendMail);


module.exports = router;