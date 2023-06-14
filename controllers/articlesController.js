"use strict";

const controller = {};
const models = require("../models");

controller.getData = async (req, res, next) => {
  // to do get data

  next();
};

controller.show = async (req, res) => {
  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    options = {};


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

  // rows là danh sách các bài viết thỏa
  res.locals.articles = rows;
  res.render("listArticle");
};

module.exports = controller;
