'use strict';

const { parse } = require('dotenv');
const models = require('../../models');
const controller = {};
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.show = async (req, res) => {
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let keyword = req.query.keyword || '';

    let options = {
        include: [{
            model: models.User
        }, {
            model: models.Category,
            attributes: ['id', 'name']
        }],
        order: [['id', 'ASC']]
    }

    if (keyword.trim() != '') {
        let users = await models.User.findAll({
            where: { name: { [Op.iLike]: `%${keyword}%` } }
        });
        let usersId = [];
        users.forEach(user => {
            usersId.push(user.id)
        });

        options.where = {
            userId: { [Op.in]: usersId }
        }
    }

    const limit = 6;
    options.limit = limit;
    options.offset = limit * (page - 1);
    let { rows, count } = await models.Editor.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    };

    rows.forEach((row) => {
        row.Categories.sort((a, b) => a.id - b.id);
        let cate = '';
        row.Categories.forEach((category) => {
            cate = cate + category.name + ', ';
        });
        row.category = cate.slice(0, -2);
    })

    res.locals.allEditors = rows;

    res.render('ad-categoryAssignment');
}

controller.setData = async (req, res) => {
    let id = isNaN(req.body.id) ? 1 : Math.max(1, parseInt(req.body.id));

    let categories = await models.Category.findAll({
        attributes: ['id', 'name', 'managerId'],
        order: [['id', 'ASC']]
    });

    let data = [];

    categories.forEach(category => {
        let selected = false;
        if (category.managerId == id) {
            selected = true;
        }
        data.push({ id: category.id, name: category.name, selected: selected });
    });

    return res.json({ data });
}

controller.update = async (req, res) => {
    let id = isNaN(req.body.id) ? 0 : Math.max(1, parseInt(req.body.id));
    let data = req.body.catesAssign;

    let cate = await models.Category.findAll({
        where: { managerId: id }
    });

    for (let i = 0; i < cate.length; i++) {
        await models.Category.findOne({
            where: { managerId: id }
        }).then(category => {
            if (category) {
                category.managerId = null;
                return category.save();
            } else {
                // Không tìm thấy bài viết
                throw new Error('Không tìm thấy chuyên mục!');
            }
        });
    }

    for (let i = 0; i < data.length; i++) {
        await models.Category.findOne({
            where: { id: data[i] }
        }).then(category => {
            if (category) {
                category.managerId = id;
                return category.save();
            } else {
                // Không tìm thấy bài viết
                throw new Error('Không tìm thấy chuyên mục!');
            }
        });
    }

    return res.json();
}

module.exports = controller;