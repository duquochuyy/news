'use strict';

const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const controller = {};

controller.show = async (req, res) => {
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let keyword = req.query.keyword || '';

    let options = {
        include: [{
            model: models.Category,
            as: 'parent',
            attributes: ['id', 'name']
        }],
        order: [['id', 'ASC']]
    };

    if (keyword.trim() != '') {
        options.where = {
            name: { [Op.iLike]: `%${keyword}%` }
        }
    }

    const limit = 6;
    options.limit = limit;
    options.offset = limit * (page - 1);
    let { rows, count } = await models.Category.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    };

    res.locals.allCategories = rows;

    let parentCategories = await models.Category.findAll({
        where: {
            parentId: null
        }
    });
    res.locals.parentCategories = parentCategories;
    res.render('ad-categoryManagement');
}

controller.add = async (req, res) => {
    let newCateName = req.body.newCateName;
    let parentCate = parseInt(req.body.parentCate);

    if (newCateName.length > 0) {
        let categories = await models.Category.findAll({
            where: { name: newCateName }
        });

        if (categories.length > 0) {
            return res.render('thanks', { message: "Thẻ đã tồn tại!" });
        }

        if (parentCate == 0) {
            await models.Category.create({
                name: newCateName
            }).then(newRow => {
                console.log(newRow);
                // Dòng dữ liệu mới đã được thêm vào thành công
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });
        }
        else {
            await models.Category.create({
                name: newCateName,
                parentId: parentCate
            }).then(newRow => {
                console.log(newRow);
                // Dòng dữ liệu mới đã được thêm vào thành công
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });
        }

        return res.json();
    }
}

controller.update = async (req, res) => {
    let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);
    let newCateName = req.body.newTagNameEdit;
    let parentCate = parseInt(req.body.cateParentEdit);

    if (newCateName.length > 0) {
        let categories = await models.Category.findAll({
            where: { name: newCateName }
        });

        if (categories.length > 0) {
            return res.render('thanks', { message: "Thẻ đã tồn tại!" });
        }

        await models.Category.findOne({
            where: { id }
        }).then(category => {
            if (category) {
                category.name = newCateName;
                if (parentCate == 0) {
                    category.parentId = null;
                }
                else {
                    category.parentId = parentCate;
                }
                return category.save();
            } else {
                // Không tìm thấy bài viết
                throw new Error('Không tìm thấy thẻ');
            }
        });

        return res.json();
    }
}

controller.remove = async (req, res) => {
    let type = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (type == 1) {
        let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);

        let children = await models.Category.findAll({
            where: { parentId: id }
        });

        if (children.length > 0) {
            children.forEach(async child => {
                await models.Category.destroy({
                    where: { id: child.id }
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

                await models.Article_Category.destroy({
                    where: {
                        categoryId: child.id
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
            })
        }

        await models.Category.destroy({
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

        await models.Article_Category.destroy({
            where: {
                categoryId: id
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
    else if (type == 2) {
        let idCategories = req.body.idCategories;

        let children = await models.Category.findAll({
            where: { parentId: { [Op.in]: idCategories } }
        });

        if (children.length > 0) {
            children.forEach(async child => {
                await models.Category.destroy({
                    where: { id: child.id }
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

                await models.Article_Category.destroy({
                    where: {
                        categoryId: child.id
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
            })
        }

        await models.Category.destroy({
            where: {
                id: { [Op.in]: idCategories }
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

        await models.Article_Category.destroy({
            where: {
                categoryId: { [Op.in]: idCategories }
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