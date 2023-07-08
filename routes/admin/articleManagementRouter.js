'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admin/articleManagementController');

router.get('/', controller.show);
router.put('/', controller.update);
router.delete('/', controller.remove);

router.get('/:id', controller.showDemoArticle);

module.exports = router;