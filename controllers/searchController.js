'use strict';

const controller = {}
const models = require('../models');
const { Op, literal } = require('sequelize');

controller.showPage = async (req, res) => {
    const str = String(req.query.q).split(' ');
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    // console.log(str);

    const keyword = str.join(' ');
    // console.log(str);

    const keywordQuery = str.join('&');
    // console.log(keyword);
    // console.log(keywordQuery);

    const options = {
        attributes: ["id", "title", "abstract", "mainImg", "content", "createDate", "publishDate", "views", "type"],
        where: {type: 3},
        order: [[literal(`ts_rank(ts, to_tsquery('english', '${keywordQuery}'))`), "DESC"]]
    }
    const limit = 10;
    options.limit = limit;
    options.offset = limit*(page-1);
    let {rows, count} = await models.Article.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: 30,
        queryParams: req.query,

    }

    res.locals.message = `Kết quả tìm kiếm: ${keyword}`
    res.locals.articles = rows;

    res.render('listArticle');
}

module.exports = controller;