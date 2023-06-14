'use strict';

let express = require('express');
let router = express.Router();
let controller = require('../controllers/articlesController');

router.get('/', controller.getData, controller.show);


module.exports = router;