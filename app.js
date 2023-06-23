'use strict';
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const models = require('./models');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const { createPagination } = require('express-handlebars-paginate');
const passport = require("./authentication/passport");
const cookieParser = require("cookie-parser");

// cau hinh public start
app.use(express.static(__dirname + '/public'))

// cau hinh su dung express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        createPagination,
    }
}))
app.set('view engine', 'hbs');

// cau hinh doc du lieu post tu body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// cau hinh su dung session
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 20 * 60 * 1000
    }
}));

// cấu hình sử dụng passport
app.use(passport.initialize());
app.use(passport.session());

// cấu hình sử dụng flash
app.use(flash());

const FetchCategories = async (req, res, next) => {
    const categories = await models.Category.findAll({
        include: [{
            model: models.Category,
            as: 'children'
        }],
        where: { parentId: null }
    });
    res.locals.categoriesForLayout = categories;

    next();
};

app.use(function(req, res, next) {
    const isAuthenticated = req.isAuthenticated();
    res.locals.notAuthenticated = !isAuthenticated;
   if (isAuthenticated) {
       res.locals.role = {
           isUser: req.user.role == "user",
           isWriter: req.user.role == "writer",
           isEditor: req.user.role == "editor",
           isAdmin: req.user.role == "admin"
       }
       res.locals.user = req.user;
   }
   next();
});

// routes
app.use('/', FetchCategories, require('./routes/indexRouter'));
app.use('/articles', FetchCategories, require('./routes/articleRouter'));
app.use('/auth', require('./routes/authRouter'));

// khoi dong web server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
