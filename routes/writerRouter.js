'use strict';

let express = require('express');
let router = express.Router();
const models = require("../models");
let controller = require('../controllers/writerController');

const { body, validationResult } = require("express-validator");
const authController = require("../controllers/authController");

// router.use(authController.isLoggedIn);

// check writer
router.use(async (req, res, next) => {
    // res.locals.isLoggedIn = req.isAuthenticated(); // de biet nguoi dung da dang nhap hay chua
    if (req.isAuthenticated()) {
        const userId = req.user.id;
        let writer = await models.Writer.findOne({ where: { userId: userId } });
        if (writer) {
            next();
        }
        else {
            return res.render('thanks', {message : "Bạn không có quyền truy cập vào trang này!"});
        }
    } else {
        return res.redirect(`/auth/login?reqUrl=${req.originalUrl}`);
    }
})

router.get('/', (req, res) => {
    res.redirect('/');
})

router.get('/postArticle',  controller.showPostArticle)

router.post('/postArticle', controller.postArticle)

router.get('/myArticles', controller.showMyArticles)

module.exports = router;