const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");


router.route('/').post(authcontrollers.home);




module.exports = router;