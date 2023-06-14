'use strict';

const controller = {}
const models = require('../models');
const { Op, literal } = require('sequelize');

controller.showPage = async (req, res) => {


    const str = String(req.query.q).split(' ');
    // console.log(str);

    const keyword = str.join(' ');
    // console.log(str);

    const keywordQuery = str.join('&');
    console.log(keyword);
    console.log(keywordQuery);
    const searchResult = await models.Article.findAll({
        attributes: ["id", "title", "abstract", "mainImg", "content", "createDate", "publishDate", "views", "type"],
        where: {type: 3},
        order: [[literal(`ts_rank(ts, to_tsquery('english', '${keywordQuery}'))`), "DESC"]],
        limit: 5
    })
    console.log(searchResult);

    res.locals.title = `Kết quả tìm kiếm ${keyword}`
    res.locals.articles = searchResult;

    res.render('listArticle');
}

module.exports = controller;