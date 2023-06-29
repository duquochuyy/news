'use strict';

let express = require('express');
let router = express.Router();
const models = require("../models");
let controller = require('../controllers/writerController');

const {body, getErrorMessage} = require("../utils/validator");
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

router.get('/', controller.showNotApprovedYet)

router.get('/my-articles', controller.showNotApprovedYet)

router.get('/not-approved-yet', controller.showNotApprovedYet)

router.get('/waiting-for-publication', controller.showWaitingForPublication)

router.get('/published', controller.showPublished)

router.get('/my-articles/edit/:id', controller.showEditArticle)

router.post('/my-articles/edit/:id', controller.editArticle)

router.get('/my-articles/:id', controller.showDemoArticle)

router.get('/denied', controller.showDenied)

router.delete(['/not-approved-yet', '/denied'], controller.deleteArticle)

router.get('/post-article',  controller.showPostArticle)

router.post('/post-article', controller.postArticle)

router.get('*', (req, res) => {
    const oldUrl = req.originalUrl;
    const newUrl = oldUrl.replace('/writer', '');
    res.redirect(newUrl);
})

module.exports = router;