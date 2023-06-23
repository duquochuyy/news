'use strict';

const controller = {};
const models = require('../models');
const {sign, verify} = require("../authentication/jwt");
const passport = require("../authentication/passport");
const mailService = require("../services/mailService");
const jwt = require("../authentication/jwt");

controller.showLogin = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  return res.render('auth/login', {
    layout: false,
    role: req.query.role,
    loginMessage: req.flash('loginMessage'),
    reqUrl: req.query.reqUrl,
    registerMessage: req.flash('registerMessage')
  });
}

controller.login = (req, res, next) => {
  let keepSignedIn = req.body.keepSignedIn;
  let reqUrl = req.body.reqUrl ? req.body.reqUrl : '/';
  const role = req.body.role;
  passport.authenticate('local-login', (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return res.redirect(`/auth/login?role=${role}&reqUrl=${reqUrl}`);
    }
    req.logIn(user, (error) => {
      if (error) {
        return next(error);
      }
      req.session.cookie.maxAge = keepSignedIn ? (20 * 60 * 60 * 1000) : null;
      res.redirect(reqUrl);
    });
  })(req, res, next);
}

controller.logout = (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    res.redirect('/');
  })
}

controller.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(`/auth/login?reqUrl=${req.originalUrl}`);
}

controller.showRegister = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  return res.render('auth/register', {
    layout: false,
    loginMessage: req.flash('registerMessage'),
    reqUrl: req.query.reqUrl,
    registerMessage: req.flash('registerMessage')
  });
}

controller.register = (req, res, next) => {
  let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/users/my-account";
  passport.authenticate('local-register', (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return res.redirect(`/auth/login?reqUrl=${reqUrl}`);
    }
    req.logIn(user, (error) => {
      if (error) {
        return next(error);
      }
      res.redirect(reqUrl);
    })
  })(req, res, next);
}

controller.showForgotPassword = (req, res) => {
  res.render('auth/forgot-password');
}

controller.forgotPassword = async (req, res) => {
  let email = req.body.email;
  // kiem tra email ton tai
  let user = await models.User.findOne({where: {email}});
  if (user) {
    // tao link
    const host = req.header('host');
    const resetLink = `${req.protocol}://${host}/auth/reset?token=${sign(email)}&email=${email}`;
    // gui email
    // thong bao thanh cong
    try {
      const result = await mailService.sendForgotPasswordMail(user, host, resetLink)
      if (result) {
        return res.render('auth/forgot-password', {done: true});
      }
    } catch (e) {
      console.log(error);
      return res.render('auth/forgot-password', {message: 'Lỗi không thể gửi mail. Vui lòng kiểm tra email của bạn'});
    }
    return res.render('auth/forgot-password', {done: true});
  } else {
    // nguoc lai, thong bao email khong ton tai
    return res.render('auth/forgot-password', {message: 'Email không tồn tại trên hệ thống'});
  }
}

controller.showResetPassword = (req, res) => {
  let email = req.query.email;
  let token = req.query.token;
  if (!token || !verify(token)) {
    return res.render('auth/reset_pw', {expired: true});
  } else {
    return res.render('auth/reset_pw', {email, token});
  }
}

controller.resetPassword = async (req, res) => {
  let bcrypt = require('bcrypt');
  let token = req.body.token;
  if (!jwt.verify(token)) {
    res.render('auth/reset_pw', {resetMessage: "Token đã hết hạn. Vui lòng thực hiện lại quá trình!"});
    return;
  }
  const email = jwt.extract(token);
  let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));

  await models.User.update({password}, {where: {email}});
  res.render('auth/reset_pw', {done: true});
}

module.exports = controller;
