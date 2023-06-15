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
  let category = isNaN(req.query.category) ? 0 : parseInt(req.query.category);
  let sort = isNaN(req.query.sort) ? 0 : parseInt(req.query.sort);
  let tag = isNaN(req.query.tag) ? 0 : parseInt(req.query.tag);
  // let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

  let options = {
    attributes: ['id', 'title', 'mainImg', 'abstract', 'publishDate', 'views'],
    include: []
  };

  if (category > 0) {
    options.include.push({
      model: models.Category,
      where: { id: category }
    })
  }
  else {
    options.include.push({
      model: models.Category,
      attributes: ['id', 'name']
    });
  }

  if (sort == 1) {
    options.order = [['publishDate', 'DESC']]
  }
  if (sort == 2) {
    options.order = [['views', 'DESC']]
  }

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

  options.include.push({
    model: models.Writer,
    include: [{
      model: models.User,
      attributes: ['id', 'name']
    }]
  });
  options.include.push({
    model: models.Tag,
    attributes: ['id', 'name']
  });

  let articles = await models.Article.findAll(options);
  articles.forEach(article => {
    article.publishDateNew = (new Date(article.publishDate)).toLocaleString('vi-VN');
    article.Tags.splice(2);
  });

  res.locals.articles = articles;
  res.render("listArticle");
};

module.exports = controller;
