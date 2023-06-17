'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const models = require('../models');

// hàm này sẽ được gọi xác thực thành công và lưu thông tin user vào session
passport.serializeUser((user, done) => {
  done(null, user.id);
});


// hàm được gọi bởi passport.session để lấy thông tin của user từ csdl và đưa vào req.user
passport.deserializeUser(async (id, done) => {
  try {
    let user = await models.User.findOne({
      attributes: ['id', 'email', 'name', 'username', 'phone', 'sex', 'birthday', 'password'],
      where: { id }
    });
    if (!user) {
      done(null, user);
      return;
    }
    let count = await models.Admin.count({ where: { userId: user.id } });
    if (count != 0) {
      user.role = "admin";
      done(null, user);
      return;
    }
    count = await models.Editor.count({ where: { userId: user.id } });
    if (count != 0) {
      user.role = "editor";
      done(null, user);
      return;
    }
    count = await models.Writer.count({ where: { userId: user.id } });
    if (count != 0) {
      user.role = "writer";
      done(null, user);
      return;
    }
    user.role = "user";
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


// hàm xác thực người dùng khi đăng nhập
passport.use('local-login', new LocalStrategy({
  usernameField: 'email', // tên đăng nhập là email
  passwordField: 'password',
  passReqToCallback: true // cho phép truyền req vào callback để kiểm tra user đã đăng nhập chưa
}, async (req, email, password, done) => {
  if (email) {
    email = email.toLowerCase();
  }
  const role = req.body.role;
  try {
    if (!req.user) { // nếu user chưa đăng nhập
      let user = await models.User.findOne({ where: { email } });
      if (!user) { // email k tồn tại
        return done(null, false, req.flash('loginMessage', 'Tài khoản không tồn tại'));
      }

      let isExisted = false;
      switch (role) {
        case "writer":
          let count = await models.Writer.count({ where: { userId: user.id } });
          if (count != 0) {
            isExisted = true;
            user.role = "writer";
          }
          break;
        case "editor":
          count = await models.Editor.count({ where: { userId: user.id } });
          if (count != 0) {
            isExisted = true;
            user.role = "editor";
          }
          break;
        case "admin":
          count = await models.Admin.count({ where: { userId: user.id } });
          if (count != 0) {
            isExisted = true;
            user.role = "admin";
          }
          break;
        default:
          isExisted = true;
          user.role = "user";
      }
      if (!isExisted) {
        return done(null, false, req.flash('loginMessage', 'Tài khoản không có quyền tương ứng'));
      }

      if (!bcrypt.compareSync(password, user.password)) { // nếu mật khẩu không đúng
        return done(null, false, req.flash('loginMessage', 'Sai mật khẩu'));
      }
      // cho phép đăng nhập
      done(null, user);
      return;
    }
    // ngược lại thì bỏ qua đăng nhập
    done(null, req.user);
  } catch (error) {
    done(error);
  }
}));


// hàm đăng ký tài khoản
passport.use('local-register', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  if (email) {
    email = email.toLowerCase();
  }
  if (req.user) { // neu nguoi dung da dang nhap thi bo qua
    return done(null, req.user);
  }
  try {
    let user = await models.User.findOne({ where: { email } });
    if (user) {
      return done(null, false, req.flash('registerMessage', 'Email đã được sử dụng!'));
    }
    await models.User.create({
      name: "",
      email: email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
      username: req.body.username,
      phone: "",
      sex: true,
      birthday: new Date(),
      facebook: "",
      zalo: "",
      google: ""
    });

    // thong bao dang ky thanh cong
    done(null, false, req.flash('registerMessage', 'Đăng ký thành công. Mời đăng nhập lại!'));
  } catch (error) {

  }
}));

module.exports = passport;
