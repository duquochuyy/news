"use strict";

const controller = {};
const models = require("../models");

controller.getData = async (req, res, next) => {
  // to do get data
  let categories = await models.Category.findAll({
    include: [
      {
        model: models.Article,
      },
    ],
    where: { parentId: null },
  });
  res.locals.categories = categories;

  let tags = await models.Tag.findAll();
  res.locals.tags = tags;

  next();
};

controller.show = async (req, res) => {
  let category = isNaN(req.query.category)
  // let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  // options = {};

  // const limit = 10;
  // options.limit = limit;
  // options.offset = limit * (page - 1);
  // let { rows, count } = await models.Article.findAndCountAll(options);
  // res.locals.pagination = {
  //   page: page,
  //   limit: limit,
  //   totalRows: count,
  //   queryParams: req.query,
  // };

  // // rows là danh sách các bài viết thỏa
  // res.locals.articles = rows;
  let articles = await models.Article.findAll();
  res.locals.articles = articles;
  res.render("listArticle");
};

module.exports = controller;
