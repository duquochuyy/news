var express = require('express');
var router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({storage: storage});

const userController = require('./../controllers/userController');
const {body, getErrorMessage} = require("../utils/validator");

router.get('/setting', userController.showProfile);

router.post('/setting', upload.single("avatar"), userController.updateProfile);

router.get('/reset_pw', userController.showResetPassword);

router.post('/reset_pw', userController.resetPassword);

module.exports = router;
