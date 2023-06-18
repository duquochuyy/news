"use strict";

const controller = {};
const models = require("../models");
const sequelize = require('sequelize');
const Op = sequelize.Op;
const PdfPrinter = require('pdfmake');
var path = require("path");
const fs = require('fs');

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
  res.locals.categoriesRightColumn = categories;

  let tags = await models.Tag.findAll();
  res.locals.tagsRightColumn = tags;

  next();
};

controller.show = async (req, res) => {
  let category = isNaN(req.query.category) ? 0 : parseInt(req.query.category);
  let sort = isNaN(req.query.sort) ? 0 : parseInt(req.query.sort);
  let tag = isNaN(req.query.tag) ? 0 : parseInt(req.query.tag);
  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

  let options = {
    attributes: ["id", "title", "mainImg", "abstract", "publishDate", "views"],
    include: [],
  };
  let message = `Tất cả bài viết`;

  if (category > 0) {
    options.include.push({
      model: models.Category,
      where: { id: category },
    });
    let cate = await models.Category.findOne({ where: { id: category } });
    message = `Chuyên mục: ${cate.name}`;
  } else {
    options.include.push({
      model: models.Category,
      attributes: ["id", "name"],
    });
  }

  if (sort == 1) {
    options.order = [["publishDate", "DESC"]];
    message += ` - mới nhất`;
  }
  if (sort == 2) {
    options.order = [["views", "DESC"]];
    message += ` - xem nhiều nhất`;
  }

  if (tag > 0) {
    options.include.push({
      model: models.Tag,
      where: { id: tag },
    });
    let tagNew = await models.Tag.findOne({ where: { id: tag } });
    message = `Thẻ: ${tagNew.name}`;
  } else {
    options.include.push({
      model: models.Tag,
      attributes: ["id", "name"],
    });
  }

  options.include.push({
    model: models.Writer,
    include: [
      {
        model: models.User,
        attributes: ["id", "name"],
      },
    ],
  });

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

  rows.forEach((article) => {
    article.publishDateNew = new Date(article.publishDate).toLocaleString(
      "vi-VN"
    );
    article.Tags.splice(2);
  });

  res.locals.articles = rows;
  res.locals.message = message;

  const newestArticleForRightColumn = await models.Article.findAll({
    attributes: ['id', 'mainImg', 'title', 'publishDate'],
    where: { type: 3 },
    order: [['publishDate', 'DESC']],
    limit: 6
  });
  newestArticleForRightColumn.forEach(article => {
    article.publishDateNew = (new Date(article.publishDate)).toLocaleString('vi-VN');
  });
  res.locals.newestArticleForRightColumn = newestArticleForRightColumn;

  res.render("listArticle");
};

controller.showDetail = async (req, res) => {
  let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id); // id bài viết
  // const idUser = 11;
  const idUser = (req.isAuthenticated()) ? req.user.id : 0;
  const subscriber = await models.Subscriber.findOne({
    where: { userId: idUser },
  });
  const timeNow = new Date();
  if (subscriber && timeNow < subscriber.expireDate)
    res.locals.isSubscriber = true;
  else {
    res.locals.isSubscriber = false;
    if (idUser == 0) {
      res.locals.isLoggedIn = false;
      res.locals.hrefLogin = `/auth/login?reqUrl=${req.originalUrl}`
    }
    else
      res.locals.isLoggedIn = true;
  }

  let article = await models.Article.findOne({
    include: [
      {
        model: models.Category,
        attributes: ["id", "name"],
      },
      {
        model: models.Writer,
        include: [
          {
            model: models.User,
            attributes: ["name"],
          },
        ],
      },
      {
        model: models.Comment,
        include: [
          {
            model: models.User,
            attributes: ["id", "name"],
          },
        ],
      },
      {
        model: models.Tag,
        attributes: ["id", "name"]
      }
    ],
    where: { id },
  });
  article.publishDateNew = new Date(article.publishDate)
    .toLocaleString("vi-VN")
    .slice(10, 19);
  article.contentPara = article.content.split(" \n ");
  article.Comments.forEach((comment) => {
    comment.newTime = new Date(comment.time).toLocaleString("vi-VN");
  });
  article.Comments.sort((a, b) => a.newTime - b.newTime);
  res.locals.article = article;

  let tagIds = [];
  article.Tags.forEach(tag => tagIds.push(tag.id));

  let relatedArticles = await models.Article.findAll({
    attributes: ['id', 'mainImg', 'title', 'publishDate'],
    include: [{
      model: models.Tag,
      attributes: ['id'],
      where: {
        id: { [Op.in]: tagIds }
      }
    }],
    where: { type: 3 },
    limit: 6
  });
  relatedArticles.forEach((article) => {
    article.publishDateNew = new Date(article.publishDate).toLocaleString(
      "vi-VN"
    );
  });
  res.locals.relatedArticles = relatedArticles;

  res.render("articleDetail");
};

controller.download = async (req, res) => {
  const idUser = (req.isAuthenticated()) ? req.user.id : 0;
  // let idUser = 11;
  let idArticle = isNaN(req.params.id) ? 0 : parseInt(req.params.id); // id bài viết
  const subscriber = await models.Subscriber.findOne({
    where: { userId: idUser },
  });
  const timeNow = new Date();
  if (subscriber && timeNow < subscriber.expireDate) {
    // xử lí việc đúng là subcriber
    let idArticle = isNaN(req.params.id) ? 0 : parseInt(req.params.id); // id bài viết
    let article = await models.Article.findOne({
      include: [
        {
          model: models.Category,
          attributes: ["id", "name"],
        },
        {
          model: models.Writer,
          include: [
            {
              model: models.User,
              attributes: ["name"],
            },
          ],
        },
      ],
      where: { id: idArticle },
    });

    if (!article)
      return res.render("thanks", { message: "Bài viết này không tồn tại!" });

    article.publishDateNew = new Date(article.publishDate)
      .toLocaleString("vi-VN")
      .slice(10, 19);
    article.contentPara = article.content.split(" \n ");

    function mp(relFontPath) {
      return path.resolve(path.join(__dirname, '..'), relFontPath)
    }

    var fonts = {
      Roboto: {
        normal: mp('./public/fonts/Roboto-Regular.ttf'),
        bold: mp('./public/fonts/Roboto-Medium.ttf'),
        italics: mp('./public/fonts/Roboto-Italic.ttf'),
        bolditalics: mp('./public/fonts/Roboto-MediumItalic.ttf')
      }
    };

    var printer = new PdfPrinter(fonts);
    var fs = require('fs');

    const content = [];

    content.push({ text: article.title, fontSize: 18, bold: true, margin: [0, 0, 0, 0] });
    content.push({ text: `Tác giả: ${article.Writer.User.name}, Ngày đăng: ${article.publishDateNew}`, margin: [0, 15, 0, 0] });
    content.push({ text: article.abstract, fontSize: 14, bold: true, margin: [0, 15, 0, 0] });
    const imgPath = path.resolve(path.join(__dirname, '..'), `./public${article.mainImg}`);
    content.push({ image: imgPath, width: 400, margin: [0, 20, 0, 10], alignment: 'center' });
    for (let para of article.contentPara)
      content.push({ text: para, fontSize: 14, normal: true, margin: [0, 10, 0, 0] });

    const footer = {
      text: [
        { text: 'The News Reporter', link: `${req.protocol}://${req.headers.host}` } // Đường dẫn tới trang báo của bạn
      ],
      style: 'footerStyle',
      alignment: 'center',
      italics: true,
      decorationColor: '#CF0000',
    }
    const style = {
      footerStyle: {
        fontSize: 10,
      }
    }


    const docDefinition = {
      content,
      footer,
      style
    };

    var options = {
      // ...
    }

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(res);
    pdfDoc.end();

    // res.render('thanks', {message: 'Download thành công!'});
  } else {
    if (!subscriber)
      return res.render("thanks", {
        message: "Bạn chưa đăng kí tài khoản Premium!",
      });
    else
      return res.render("thanks", {
        message: "Vui lòng gia hạn tài khoản để sử dụng tính năng!",
      });
  }
};

module.exports = controller;
