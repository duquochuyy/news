'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admin/userManagementController');

router.get('/', controller.show);
router.put('/', controller.update);
router.delete('/', controller.remove);

module.exports = router;