'use strict';

const controller = {};
const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.show = async (req, res) => {
    let userId = req.user.id;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

    let editor = await models.Editor.findOne({ where: { userId: userId } });

    let options = {
        attributes: ["id", "title", "mainImg", "abstract", "publishDate"],
        include: [{
            model: models.Category,
            where: { managerId: editor.id }
        }],
        where: { type: 1 }
    };

    const limit = 10;
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
        article.publishDateNew = new Date(article.publishDate).toLocaleString(
            "vi-VN"
        );
    });

    res.locals.articlesOfEditor = rows;

    res.render('browsingList');
}

controller.showDetail = async (req, res) => {
    let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);

    let article = await models.Article.findOne({
        include: [
            {
                model: models.Category,
                attributes: ["id", "name"],
            },
            {
                model: models.Writer,
                include: [
                    {
                        model: models.User,
                        attributes: ["name"],
                    },
                ],
            },
            {
                model: models.Tag,
                attributes: ["id", "name"]
            }
        ],
        where: {
            id,
            type: 1
        },
    });
    article.contentPara = article.content.split("\n");
    res.locals.article = article;

    let idCategory = [];
    article.Categories.forEach((category) => {
        idCategory.push(category.id);
    });

    let categoriesForEditor = await models.Category.findAll({
        where: {
            id: { [Op.notIn]: idCategory }
        }
    });
    categoriesForEditor.forEach((category) => {
        category.idArticle = id;
    });
    res.locals.categoriesForEditor = categoriesForEditor;

    let idTag = [];
    article.Tags.forEach((tag) => {
        idTag.push(tag.id);
    });

    let tagsForEditor = await models.Tag.findAll({
        where: {
            id: { [Op.notIn]: idTag }
        }
    });
    tagsForEditor.forEach(tag => {
        tag.idArticle = id;
    });
    res.locals.tagsForEditor = tagsForEditor;

    res.render('browsingDetail');
}

controller.update = async (req, res) => {
    let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    let type = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (type == 1) {
        let category = isNaN(req.body.idCategory) ? 0 : parseInt(req.body.idCategory);

        if (category > 0) {
            await models.Article_Category.create({
                articleId: id,
                categoryId: category
            }).then(newRow => {
                console.log(newRow);
                // Dòng dữ liệu mới đã được thêm vào thành công
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });

            return res.json();
        }
    }
    else if (type == 2) {
        let tag = isNaN(req.body.idTag) ? 0 : parseInt(req.body.idTag);

        if (tag > 0) {
            await models.Article_Tag.create({
                articleId: id,
                tagId: tag
            }).then(newRow => {
                console.log(newRow);
                // Dòng dữ liệu mới đã được thêm vào thành công
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });

            return res.json();
        }
    }
}

controller.remove = async (req, res) => {
    let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    let type = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (type == 1) {
        let numOfCategories = isNaN(req.body.numOfCategories) ? 0 : parseInt(req.body.numOfCategories);

        if (numOfCategories > 1) {
            let category = isNaN(req.body.idCategory) ? 0 : parseInt(req.body.idCategory);
            await models.Article_Category.destroy({
                where: {
                    articleId: id,
                    categoryId: category
                }
            }).then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    console.log('Dòng dữ liệu đã được xóa thành công');
                } else {
                    console.log('Không tìm thấy dòng dữ liệu để xóa');
                }
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });

            return res.json();
        }
    }
    else if (type == 2) {
        let numOfTags = isNaN(req.body.numOfTags) ? 0 : parseInt(req.body.numOfTags);

        if (numOfTags > 1) {
            let tag = isNaN(req.body.idTag) ? 0 : parseInt(req.body.idTag);
            await models.Article_Tag.destroy({
                where: {
                    articleId: id,
                    tagId: tag
                }
            }).then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    console.log('Dòng dữ liệu đã được xóa thành công');
                } else {
                    console.log('Không tìm thấy dòng dữ liệu để xóa');
                }
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });

            return res.json();
        }
    }
}

module.exports = controller;