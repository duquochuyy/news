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
            model: models.Article
        }]
    }

    if (keyword.trim() != '') {
        options.where = {
            name: { [Op.iLike]: `%${keyword}%` }
        }
    }

    const limit = 6;
    options.limit = limit;
    options.offset = limit * (page - 1);
    let { rows, count } = await models.Tag.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    };

    res.locals.allTags = rows;
    res.render('ad-tagManagement');
}

controller.add = async (req, res) => {
    let newTag = req.body.newTag;

    if (newTag.length > 0) {
        let tags = await models.Tag.findAll({
            where: { name: newTag }
        });

        if (tags.length > 0) {
            return res.render('thanks', { message: "Thẻ đã tồn tại!" });
        }

        await models.Tag.create({
            name: newTag
        }).then(newRow => {
            console.log(newRow);
            // Dòng dữ liệu mới đã được thêm vào thành công
        }).catch(error => {
            console.log(error);
            // Xử lý lỗi nếu có
        });

        return res.redirect(req.originalUrl);
    }
}

controller.update = async (req, res) => {
    let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);
    let newTagName = req.body.newTagName;

    if (newTagName.length > 0) {
        let tags = await models.Tag.findAll({
            where: {
                name: { [Op.eq]: `${newTagName}` }
            }
        });

        if (tags.length > 0) {
            return res.render('thanks', { message: "Thẻ đã tồn tại!" });
        }
        else {
            await models.Tag.findOne({
                where: { id }
            }).then(tag => {
                if (tag) {
                    tag.name = newTagName;
                    return tag.save();
                } else {
                    // Không tìm thấy bài viết
                    throw new Error('Không tìm thấy thẻ');
                }
            });

            return res.json();
        }
    }
}

controller.remove = async (req, res) => {
    let type = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (type == 1) {
        let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);

        await models.Tag.destroy({
            where: { id }
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

        await models.Article_Tag.destroy({
            where: {
                tagId: id
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
    else if (type == 2) {
        let idTags = req.body.idTags;
        await models.Tag.destroy({
            where: {
                id: { [Op.in]: idTags }
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

        await models.Article_Tag.destroy({
            where: {
                tagId: { [Op.in]: idTags }
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
    }
}

module.exports = controller;