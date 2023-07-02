'use strict';

const models = require('../../models');
const controller = {};
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.show = async (req, res) => {
    const page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let keyword = req.query.keyword || '';
    const options = {}
    if (keyword.trim() != '') {
        options.include = [
            {
                model: models.User,
                attributes: ['name', 'email', 'username', 'avatar'],
                where: {name: { [Op.iLike]: `%${keyword}%` }}
            }
        ]
    }
    else {
        options.include = [
            {
                model: models.User,
                attributes: ['name', 'email', 'username', 'avatar']
            }
        ]
    }

    const limit = 5;
    options.limit = limit,
    options.offset = limit * (page - 1)
    const {rows, count} = await models.Subscriber.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    }
    rows.forEach(item => {
        item.newSubdate = new Date(item.subscribeDate).toLocaleString("vi-VN");
        item.newExpDate = new Date(item.expireDate).toLocaleString("vi-VN");
    })

    res.locals.subscribers = rows;

    res.render('ad-accountRenewal');
}

controller.update = async(req, res) => {
    const id = isNaN(req.body.subscriberId) ? 0 : parseInt(req.body.subscriberId);
    const time = req.body.time
    console.log(time);

    await models.Subscriber.findOne({
        where: { id }
    }).then(subscriber => {
        if (subscriber) {
            subscriber.expireDate = time;
            return subscriber.save();
        } else {
            throw new Error('Không tìm thấy subscriber');
        }
    });

    return res.json();

}

module.exports = controller;