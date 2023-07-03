'use strict';

const models = require('../../models');
const controller = {};
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.show = async (req, res) => {
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let keyword = req.query.keyword || '';

    let options = {
        include: [{
            model: models.Category,
            attributes: ['id', 'name']
        }, {
            model: models.Tag,
            attributes: ['id', 'name']
        }],
        where: { type: { [Op.in]: [2, 3] } },
        order: [['id', 'ASC']]
    }

    if (keyword.trim() != '') {
        options.where = {
            title: { [Op.iLike]: `%${keyword}%` }
        }
    }

    const limit = 6;
    options.limit = limit;
    options.offset = limit * (page - 1);
    let { rows, count } = await models.Article.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    };
    rows.forEach((article) => {
        let cate = '';
        article.Categories.forEach((row) => {
            cate = cate + row.name + ' - ';
        });
        article.category = cate.slice(0, -3);

        let tag = '';
        article.Tags.forEach((row) => {
            tag = tag + row.name + ' - ';
        });
        article.tag = tag.slice(0, -3);

        article.isPublished = false;
        if (article.type == 3) article.isPublished = true;
    });

    res.locals.allArticles = rows;
    res.render('ad-articleManagement');
}

controller.update = async (req, res) => {
    let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);
    await models.Article.findOne({
        where: { id }
    }).then(article => {
        if (article) {
            article.type = 3;
            return article.save();
        } else {
            // Không tìm thấy bài viết
            throw new Error('Không tìm thấy thẻ');
        }
    });

    return res.json();
}

controller.remove = async (req, res) => {
    let type = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (type == 1) {
        let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);

        await models.Article.findOne({
            where: { id }
        }).then(article => {
            if (article) {
                article.type = 5;
                return article.save();
            } else {
                // Không tìm thấy bài viết
                throw new Error('Không tìm thấy bài viết');
            }
        });

        return res.json();
    }
    else if (type == 2) {
        let idArticles = req.body.idArticles;

        for (const idArticle of idArticles) {
            await models.Article.findOne({
                where: { id: idArticle }
            }).then(article => {
                if (article) {
                    article.type = 5;
                    return article.save();
                } else {
                    // Không tìm thấy bài viết
                    throw new Error('Không tìm thấy bài viết');
                }
            });
        }

        return res.json();
    }
}

module.exports = controller;