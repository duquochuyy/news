'use strict';

const models = require('../../models');
const controller = {};

controller.show = (req, res) => {
    res.render('ad-articleManagement');
}

module.exports = controller;