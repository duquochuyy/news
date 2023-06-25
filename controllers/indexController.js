'use strict';

const controller = {}
const models = require('../models');

controller.showHomePage = async (req, res) => {
    // 3 bai viet noi bac nhat tuan 
    const mostArticleInWeek = await models.Article.findAll({
        attributes: ['id', 'mainImg', 'abstract', 'views'],
        where: { type: 3 },
        order: [['views', 'DESC']],
        limit: 4
    });
    res.locals.mostArticleInWeek = mostArticleInWeek;

    // 10 bai viet moi nhat (moi chuyen muc)
    const newestArticle = await models.Article.findAll({
        include: [{
            model: models.Category,
            attributes: ['id', 'name']
        }, {
            model: models.Writer,
            include: [{
                model: models.User,
                attributes: ['id', 'name']
            }]
        }],
        where: { type: 3 },
        order: [['publishDate', 'DESC']],
        limit: 10
    });
    newestArticle.forEach(article => {
        article.publishDateNew = (new Date(article.publishDate)).toLocaleString('vi-VN');
    });
    res.locals.newestArticle = newestArticle;

    // 10 bai viet duoc xem nhieu nhat (moi chuyen muc)
    const mostArticle = await models.Article.findAll({
        include: [{
            model: models.Category,
            attributes: ['id', 'name']
        }, {
            model: models.Writer,
            include: [{
                model: models.User,
                attributes: ['id', 'name']
            }]
        }],
        where: { type: 3 },
        order: [['views', 'DESC']],
        limit: 10
    });
    mostArticle.forEach(article => {
        article.publishDateNew = (new Date(article.publishDate)).toLocaleString('vi-VN');
    });
    res.locals.mostArticle = mostArticle;

    // top 10 chuyen muc, moi chuyen muc 1 bai moi nhat
    let newestArticleOfEachCategory = await models.Category.findAll({
        include: [{
            model: models.Category,
            as: 'children',
            attributes: ['id', 'name'],
            include: [{
                model: models.Article,
                attributes: ['id', 'title', 'mainImg', 'publishDate'],
                where: { type: 3 }
            }]
        }, {
            model: models.Article,
            attributes: ['id', 'title', 'mainImg', 'publishDate'],
            where: { type: 3 }
        }],
        where: { parentId: null }
    });
    newestArticleOfEachCategory.forEach((category) => {
        if (category.children && category.children.length > 0) {
            category.children.forEach((child) => {
                child.Articles.sort((a, b) => b.publishDate - a.publishDate);
                child.Articles.splice(2);
                child.Articles.forEach(article => {
                    article.publishDateNew = (new Date(article.publishDate)).toLocaleString('vi-VN');
                });
            });
        }
        category.Articles.sort((a, b) => b.publishDate - a.publishDate);
        category.Articles.forEach(article => {
            article.publishDateNew = (new Date(article.publishDate)).toLocaleString('vi-VN');
        });
        category.Articles.splice(2);
    });
    res.locals.newestArticleOfEachCategory = newestArticleOfEachCategory;

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