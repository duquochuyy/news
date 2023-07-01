'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
const controller = require('../controllers/adminController');
const authController = require('../controllers/authController');

router.use(async (req, res, next) => {
    if (req.isAuthenticated()) {
        const userId = req.user.id;
        let admin = await models.Admin.findOne({ where: { userId: userId } });
        if (admin) {
            next();
        }
        else {
            return res.render('thanks', { message: "Bạn không có quyền truy cập vào trang này!" });
        }
    } else {
        return res.redirect(`/auth/login?reqUrl=${req.originalUrl}`);
    }
});

router.use(async (req, res, next) => {
    let userId = req.user.id;
    let user = await models.User.findOne({
        where: { id: userId }
    });
    res.locals.user = user;
    next();
});

router.get('/', controller.show);
router.post('/', controller.add);
router.put('/', controller.update);
router.delete('/', controller.remove);


router.use('/tag-management', require('../routes/admin/tagManagementRouter'));


router.use('/article-management', require('../routes/admin/articleManagementRouter'));


router.use('/user-management', require('../routes/admin/userManagementRouter'));


router.use('/category-assignment', require('../routes/admin/categoryAssignmentRouter'));


router.use('/account-renewal', require('../routes/admin/accountRenewalRouter'));


module.exports = router;