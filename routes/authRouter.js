var express = require('express');
var router = express.Router();
const controller = require('../controllers/authController');
const {body, getErrorMessage} = require("../utils/validator");
const passport = require("../authentication/passport");

router.get('/login', controller.showLogin);
router.post('/login',
  body('username').trim()
    .notEmpty().withMessage('Tên đăng nhập không được trống!'),
  body('password').trim()
    .notEmpty().withMessage('Mật khẩu không được trống!'),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (message) {
      return res.render('auth/login', {layout: false, loginMessage: message});
    }
    next();
  },
  controller.login
);

router.get('/logout', controller.logout);

router.get('/register', controller.showRegister);

router.post('/register',
  body('username').trim()
    .notEmpty().withMessage('Tên đăng nhập không được trống'),
  body('email').trim()
    .notEmpty().withMessage('Email không được trống')
    .isEmail().withMessage('Email không hợp lệ'),
  body('password').trim()
    .notEmpty().withMessage('Mật khẩu không được trống'),
  body('password').matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    .withMessage('Mật khẩu cần dài 8 kí tự, gồm 1 số'),
  body('confirmPassword').custom((confirmPassword, {req}) => {
    if (confirmPassword != req.body.password) {
      throw new Error('Mật khẩu không khớp');
    }
    return true;
  }),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (message) {
      return res.render('auth/register', {layout: false, registerMessage: message});
    }
    next();
  },
  controller.register
);

router.get('/forgot', controller.showForgotPassword);
router.post('/forgot',
  body('email').trim()
    .notEmpty().withMessage('Email không được trống')
    .isEmail().withMessage('Địa chỉ email không hợp lệ'),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (message) {
      return res.render('auth/forgot-password', {message});
    }
    next();
  }
  , controller.forgotPassword);
router.get('/reset', controller.showResetPassword);
router.post('/reset',
  body('confirmPassword').custom((confirmPassword, {req}) => {
    if (confirmPassword != req.body.password) {
      throw new Error('Password is not match!');
    }
    return true;
  }),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (message) {
      return res.render('auth/reset_pw', {resetMessage: message});
    }
    next();
  }
  , controller.resetPassword);

router.get('/google', passport.authenticate("google", {scope: ["profile", "email"]}));
router.get('/google/callback',
  passport.authenticate("google", {failureRedirect: '/auth/login', failureMessage: true}),
  (req, res) => {
    res.redirect("/");
  }
);

router.get('/facebook', passport.authenticate('facebook', {
  authType: 'reauthenticate'
}));
router.get('/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/auth/login', failureMessage: true}),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = router;
