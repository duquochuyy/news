'use strict';

const models = require('../../models');
const controller = {};
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.show = async (req, res) => {
    let idAdmin = req.user.id;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let keyword = req.query.keyword || '';

    let options = {
        attributes: ['id', 'name', 'email', 'username', 'sex'],
        where: { id: { [Op.not]: idAdmin } },
        order: [['id', 'ASC']]
    }

    if (keyword.trim() != '') {
        options.where = {
            name: { [Op.iLike]: `%${keyword}%` }
        }
    }

    const limit = 6;
    options.limit = limit;
    options.offset = limit * (page - 1);
    let { rows, count } = await models.User.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    };

    rows.forEach((row) => {
        row.type = 'Người dùng';
    });

    for (const row of rows) {
        const writer = await models.Writer.findOne({ where: { userId: row.id } });
        const editor = await models.Editor.findOne({ where: { userId: row.id } });
        if (writer) row.type = 'Phóng viên';
        if (editor) row.type = 'Biên tập viên';
    }

    res.locals.allUsers = rows;

    res.render('ad-userManagement');
}

controller.update = async (req, res) => {
    let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);
    let userType = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (userType == 1) {
        await models.Writer.destroy({
            where: { userId: id }
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

        let editor = await models.Editor.findOne({ where: { userId: id } });
        if (!editor) {
            await models.Editor.create({
                userId: id
            }).then(newRow => {
                console.log(newRow);
                // Dòng dữ liệu mới đã được thêm vào thành công
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });
        }
    }
    else if (userType == 2) {
        await models.Editor.destroy({
            where: { userId: id }
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

        let writer = await models.Writer.findOne({ where: { userId: id } });
        if (!writer) {
            await models.Writer.create({
                userId: id
            }).then(newRow => {
                console.log(newRow);
                // Dòng dữ liệu mới đã được thêm vào thành công
            }).catch(error => {
                console.log(error);
                // Xử lý lỗi nếu có
            });
        }
    }
    else {
        await models.Writer.destroy({
            where: { userId: id }
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

        await models.Editor.destroy({
            where: { userId: id }
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

    return res.json();
}

controller.remove = async (req, res) => {
    let type = isNaN(req.body.type) ? 0 : parseInt(req.body.type);

    if (type == 1) {
        let id = isNaN(req.body.id) ? 0 : parseInt(req.body.id);

        await models.Writer.destroy({
            where: { userId: id }
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

        await models.Editor.destroy({
            where: { userId: id }
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

        await models.Subscriber.destroy({
            where: { userId: id }
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

        await models.Comment.destroy({
            where: { userId: id }
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

        await models.User.destroy({
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

    }
    if (type == 2) {
        let idUsers = req.body.idUsers;

        await models.Writer.destroy({
            where: { userId: { [Op.in]: idUsers } }
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

        await models.Editor.destroy({
            where: { userId: { [Op.in]: idUsers } }
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

        await models.Subscriber.destroy({
            where: { userId: { [Op.in]: idUsers } }
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

        await models.Comment.destroy({
            where: { userId: { [Op.in]: idUsers } }
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

        await models.User.destroy({
            where: {
                id: { [Op.in]: idUsers }
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

    return res.json();
}

module.exports = controller;