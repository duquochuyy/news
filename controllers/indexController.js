'use strict';

const controller = {}
const models = require('../models');

controller.showHomePage = async (req, res) => {
    const mostArticle = await models.Article.findAll({
        attributes: ['id', 'mainImg', 'abstract', 'views'],
        order: [['views', 'DESC']],
        limit: 4
    });
    res.locals.mostArticle = mostArticle;

    const newestArticle = await models.Article.findAll({
        order: [['createdAt', 'DESC']],
        include: [{
            model: models.Category,
            model: models.Writer
        }],
        limit: 10
    });
    res.locals.newestArticle = newestArticle;

    res.render('index');
};

controller.showPage = (req, res, next) => {
    const pages = ['listArticle', 'setting', 'articleDetail'];
    if (pages.includes(req.params.page)) {
        return res.render(req.params.page);
    }
    next();
}

module.exports = controller;