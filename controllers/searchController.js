'use strict';

const controller = {}
const models = require('../models');
const { Op, literal } = require('sequelize');

controller.showPage = async (req, res) => {
    const str = String(req.query.q).split(' ');
    const optionSearch = (req.query.option) ? req.query.option : 'all';
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

    console.log(optionSearch);

    const keyword = str.join(' ');

    const keywordQuery = str.join('&');

    
    const options = {
        attributes: ["id", "title", "abstract", "mainImg", "content", "createDate", "publishDate", "views", "type"],
        where: { 
            type: 3, 
            // để cho việc hiển thị khi có khớp chuỗi
            // [Op.and]: literal(`ts @@ to_tsquery('english', '${keywordQuery}')`)
        },
        include: [
            {
                model: models.Category,
                attributes: ["id", "name"],
            },
            {
                model: models.Tag,
                attributes: ["id", "name"],
            },
            {
                model: models.Writer,
                include: [
                    {
                        model: models.User,
                        attributes: ["id", "name"],
                    },
                ],
            }
        ],
        // subQuery: false
    }

    switch (optionSearch) {
        case 'title':
            options.order = [[literal(`ts_rank(to_tsvector('english', title), to_tsquery('english', '${keywordQuery}'))`), "DESC"]]
            break;
        case 'abstract':
            options.order = [[literal(`ts_rank(to_tsvector('english', abstract), to_tsquery('english', '${keywordQuery}'))`), "DESC"]]
            break;
        case 'content':
            options.order = [[literal(`ts_rank(to_tsvector('english', content), to_tsquery('english', '${keywordQuery}'))`), "DESC"]]
            break;
        default:
            options.order = [[literal(`ts_rank(ts, to_tsquery('english', '${keywordQuery}'))`), "DESC"]]
            break;
    }

    const limit = 10;
    options.limit = limit,
    options.offset = limit * (page - 1)
    
    let { rows, count } = await models.Article.findAndCountAll(options);
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: 30,
        queryParams: req.query,
    }
    rows.forEach((article) => {
        article.publishDateNew = new Date(article.publishDate).toLocaleString(
          "vi-VN"
        );
        // article.Tags.splice(2);

        // console.log(article.id)
      });

    res.locals.message = `Kết quả tìm kiếm: ${keyword}`;
    res.locals.articles = rows;

    res.render('listArticle');
}

module.exports = controller;