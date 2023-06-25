'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/editorController');
const authController = require('../controllers/authController');

router.use(authController.isLoggedIn);

router.get('/', controller.show);
router.get('/:id', controller.showDetail);

router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;