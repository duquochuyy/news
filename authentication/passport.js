'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook');
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
      attributes: ['id', 'email', 'name', 'username', 'phone', 'sex', 'birthday', 'password', 'avatar'],
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
  usernameField: 'username', // tên đăng nhập là email
  passwordField: 'password',
  passReqToCallback: true // cho phép truyền req vào callback để kiểm tra user đã đăng nhập chưa
}, async (req, username, password, done) => {
  if (username) {
    username = username.toLowerCase();
  }
  const role = req.body.role;
  try {
    if (!req.user) { // nếu user chưa đăng nhập
      let user = await models.User.findOne({ where: { username } });
      if (!user) { // email k tồn tại
        return done(null, false, req.flash('loginMessage', 'Tài khoản không tồn tại'));
      }

      if (!bcrypt.compareSync(password, user.password)) { // nếu mật khẩu không đúng
        return done(null, false, req.flash('loginMessage', 'Sai mật khẩu'));
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
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  if (username) {
    username = username.toLowerCase();
  }
  if (req.user) { // neu nguoi dung da dang nhap thi bo qua
    return done(null, req.user);
  }
  try {
    let user = await models.User.findOne({ where: { username } });
    if (user) {
      return done(null, false, req.flash('registerMessage', 'Tên đăng nhập đã được sử dụng!'));
    }
    await models.User.create({
      name: "",
      email: req.body.email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
      username: username,
      phone: "",
      sex: true,
      birthday: null,
      facebook: "",
      zalo: "",
      google: "",
      avatar: null
    });

    // thong bao dang ky thanh cong
    done(null, false, req.flash('registerMessage', 'Đăng ký thành công. Mời đăng nhập lại!'));
  } catch (error) {
    console.log("PASSPORT_REGISTER: Register failed.");
    done(null, false, req.flash('registerMessage', 'Đã xảy ra lỗi. Vui lòng thử lại sau!'));
  }
}));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await models.User.findOne({ where: { google: profile.id } });
        if (!user) {
          user = await models.User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: "",
            username: "",
            phone: "",
            sex: true,
            birthday: null,
            facebook: "",
            zalo: "",
            avatar: profile.photos[0].value,
            google: profile.id
          });
        }

        // thong bao dang ky thanh cong
        done(null, user);
        return;
      } catch (error) {
        console.log("PASSPORT_GOOGLE: Login by google failed.", error);
        return done(null, null);
      }

    }
  )
);

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'email'],
    enableProof: true
  },
  async function verify(accessToken, refreshToken, profile, cb) {
    try {
      let user = await models.User.findOne({ where: { facebook: profile.id } });
      if (!user) {
        user = await models.User.create({
          name: profile.displayName,
          email: "",
          password: "",
          username: "",
          phone: "",
          sex: true,
          birthday: null,
          facebook: profile.id,
          zalo: "",
          avatar: profile.photos.length > 0 ? profile.photos[0].value : null,
          google: ""
        });
      }

      // thong bao dang ky thanh cong
      cb(null, user);
      return;
    } catch (error) {
      console.log("PASSPORT_FACEBOOK: Login by facebook failed.", error);
      return cb(null, null);
    }
  }
));

module.exports = passport;
