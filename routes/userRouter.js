var express = require('express');
var router = express.Router();

const userController = require('./../controllers/userController');
const {body, getErrorMessage} = require("../utils/validator");

router.get('/setting', userController.showProfile);

router.post('/setting', userController.updateProfile);

router.get('/reset_pw', userController.showResetPassword);

router.post('/reset_pw', userController.resetPassword);

module.exports = router;
