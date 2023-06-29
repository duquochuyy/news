'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admin/tagManagementController');

router.get('/', controller.show);
router.post('/', controller.add);
router.put('/', controller.update);
router.delete('/', controller.remove);

module.exports = router;