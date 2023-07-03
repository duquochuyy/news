'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admin/categoryAssignmentController');

router.get('/', controller.show);
router.put('/', controller.setData);
router.post('/', controller.update);

module.exports = router;