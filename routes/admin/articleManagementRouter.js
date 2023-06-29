'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admin/articleManagementController');

router.get('/', controller.show);

module.exports = router;