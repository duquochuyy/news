'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
const controller = require('../controllers/editorController');
const authController = require('../controllers/authController');

router.use(async (req, res, next) => {
    if (req.isAuthenticated()) {
        const userId = req.user.id;
        let editor = await models.Editor.findOne({ where: { userId: userId } });
        if (editor) {
            next();
        }
        else {
            return res.render('thanks', { message: "Bạn không có quyền truy cập vào trang này!" });
        }
    } else {
        return res.redirect(`/auth/login?reqUrl=${req.originalUrl}`);
    }
})

router.get('/', controller.show);
router.get('/:id', controller.showDetail);

router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.post('/:id', controller.handle);

module.exports = router;