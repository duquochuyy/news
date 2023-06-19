'use strict';

const controller = {};

controller.show = (req, res) => {
    res.render('browsingList');
}

module.exports = controller;