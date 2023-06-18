'use strict';

let express = require('express');
let router = express.Router();
let controller = require('../controllers/articlesController');

router.get('/', controller.getData, controller.show);
router.get('/:id', controller.getData, controller.showDetail);
router.get('/:id/download', controller.download);

router.post('/:id', controller.comment);

module.exports = router;