'use strict';

const controller = {}
const models = require('../models');
const { Op } = require('sequelize');

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
            attributes: ['name'],
            where: {
                parentId: {
                    [Op.not]: null
                }
            }
        }, {
            model: models.Writer,
            include: [{
                model: models.User,
                attributes: ['name']
            }]
        }],
        where: { type: 3 },
        order: [['createdAt', 'DESC']],
        limit: 10
    });
    res.locals.newestArticle = newestArticle;

    // 10 bai viet duoc xem nhieu nhat (moi chuyen muc)
    const mostArticle = await models.Article.findAll({
        include: [{
            model: models.Category,
            attributes: ['name'],
            where: {
                parentId: {
                    [Op.not]: null
                }
            }
        }, {
            model: models.Writer,
            include: [{
                model: models.User,
                attributes: ['name']
            }]
        }],
        where: { type: 3 },
        order: [['views', 'DESC']],
        limit: 10
    });
    res.locals.mostArticle = mostArticle;

    // top 10 chuyen muc, moi chuyen muc 1 bai moi nhat
    const newestArticleOfEachCategory = await models.Category.findAll({
        include: [{
            model: models.Category,
            as: 'children',
            attributes: ['name'],
            include: [{
                model: models.Article,
                through: { attributes: [] },
                where: {
                    id: {
                        [Op.in]: models.Category.sequelize.literal(`
                            SELECT "articleId"
                            FROM "Article_Category"
                            WHERE "categoryId" = "Category"."id"
                            LIMIT 2
                        `)
                    }
                },
                order: [['createdAt', 'DESC']],
                where: { type: 3 }
            }]
        }, {
            model: models.Article,
            through: { attributes: [] },
            where: {
                id: {
                    [Op.in]: models.Category.sequelize.literal(`
                            SELECT "articleId"
                            FROM "Article_Category"
                            WHERE "categoryId" = "Category"."id"
                            LIMIT 2
                        `)
                }
            },
            order: [['createdAt', 'DESC']],
            where: { type: 3 }
        }],
        where: { parentId: null }
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