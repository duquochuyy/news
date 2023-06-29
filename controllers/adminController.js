'use strict';

const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const controller = {};

controller.show = (req, res) => {
    res.render('ad-categoryManagement');
}

module.exports = controller;