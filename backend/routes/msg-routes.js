const express = require("express");
const router = express.Router();
const msgController = require("../controllers/msg-controller");


router.route('/msgmail').post(msgController.msgMail);


module.exports = router;