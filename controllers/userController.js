'use strict';

const models = require("../models");
const bcrypt = require("bcrypt");

const controller = {};

controller.showProfile = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/login?reqUrl=/user/setting');
  }
  const today = new Date(req.user.birthday)
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedBirthday = yyyy + '-' + mm + '-' + dd;
  const profile = {
    ...req.user,
    name: !(req.user.name) ? "Người dùng" : req.user.name,
    phone: !(req.user.phone) ? "Thêm số điện thoại" : req.user.phone,
    email: !(req.user.email) ? "Thêm email" : req.user.email
  };
  return res.render('setting', {
    profile: profile,
    birthday: formattedBirthday,
  });
}

controller.updateProfile = async (req, res) => {
  const data = {
    ...req.body,
    avatar: !req.file ? req.user.avatar : `/images/users/${req.file.originalname}`,
    birthday: new Date(req.body.birthday)
  }
  try {
    await models.User.update(data, {where: {username: req.user.username}});
    return res.send("success");
  } catch (e) {
    console.log(e);
    return res.send("failed");
  }
}

controller.showResetPassword = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/login?reqUrl=/user/reset_pw');
  }
  return res.render('reset_pw');
}

controller.resetPassword = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/login?reqUrl=/user/reset_pw');
  }

  const password = req.body.pw;
  const newPassword = req.body.newPw;

  const user = await models.User.findOne({where: {username: req.user.username}});
  if (!bcrypt.compareSync(password, user.password)) {
    res.render('reset_pw', {resetMessage: "Mật khẩu không đúng."});
    return;
  }

  let encryptedPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8));
  try {
    await models.User.update({password: encryptedPassword}, {where: {username: req.user.username}});
    req.logout((error) => {
      if (error) {
        return next(error);
      }
      res.render('reset_pw', {done: true});
    });
  } catch (e) {
    res.render('reset_pw', {resetMessage: "Đã có lỗi xảy ra. Không thể đổi mật khẩu!"});
  }
}

module.exports = controller;
