"use strict";

const controller = {};
const models = require("../models");
const { Op, literal } = require("sequelize");
const sequelize = require("sequelize");
const multer = require("multer");
const path = require("path");
const util = require('util');

const NOT_APPROVED_YET = 1;
const WAITING_FOR_PUBLICATION = 2;
const PUBLISHED = 3;
const DENIED = 4;
const DELETED = 5;


controller.showPostArticle = async (req, res) => {
    const categories = await models.Category.findAll({
        order: [['id', 'ASC']]
    });
    const tags = await models.Tag.findAll();

    res.locals.categories = categories;
    res.locals.tags = tags;

    res.render("writer/post_article");
};

controller.postArticle = async (req, res) => {
    // kiểm tra user và writer
    const userId = req.isAuthenticated() ? req.user.id : 0;
    const writer = await models.Writer.findOne({
        where: { userId: userId },
    });

    if (!userId || !writer) {
        return res.render("thanks", { message: "Lỗi tài khoản" });
    }

    // xử lí hình ảnh
    const storage = multer.diskStorage({
        destination: path.resolve(  // đường dẫn lưu ảnh
            path.join(__dirname, ".."), "./public/images/articles"),
        filename: (req, file, cb) => {  // cấu tạo tên file lưu
            const ext = path.extname(file.originalname);
            const filename = file.fieldname + "-" + Date.now() + ext;
            cb(null, filename);
        },
    });
    // nhận ảnh và lưu ảnh
    const upload = multer({ storage: storage });
    const uploadSingle = util.promisify(upload.single("mainImg"));

    let mainImg = "";
    try {
        await uploadSingle(req, res);
        const img = req.file;
        if (img) {
            mainImg = "/images/articles/" + img.filename;
            console.log(`imgmggggggg ${mainImg}`);
        }
    } catch (error) {
        console.error('Lỗi khi tải lên hình ảnh:', error);
        return res.render('thanks', { message: 'Lỗi khi tải lên dữ liệu!' });
    }

    // lấy các giá trị khác của bài viết
    const title = req.body.title;
    const abstract = req.body.abstract;
    const content = req.body.content;
    const createDate = new Date();
    const views = 0;
    const type = 1; //  đang chờ xuất bản
    const authorId = writer.id;

    if (!title || !abstract || !content) {
        // console.error('Lỗi khi tải lên hình ảnh:', error);
        // res.status(400).send('Dữ liệu bị lỗi, không thể tạo bài viết');
        // res.redirect('/')
        return res.render('post_article', { layout: false, postMessage: "Vui lòng điền đầy đủ các thông tin" });
    }

    // tạo bài viết với đầy đủ các giá trị
    const article = await models.Article.create({
        title,
        abstract,
        content,
        createDate,
        publishDate: sequelize.literal(`NOW() + INTERVAL '${8766} hour'`),
        mainImg,
        views,
        type,
        authorId
    })
    // tạo bài viết bị lỗi
    if (!article) {
        return res.render('thanks', { message: "Lỗi khi tạo dữ liệu bài báo mới!" })
    }
    console.log(`arrticleeeee id ${article.id}`)

    // thêm dữ liệu categories và tags của bài viết vào 2 bảng
    const categories = req.body.categories.split(',');
    const tags = req.body.tags.split(',');
    // xử lí thêm categories, xóa bỏ các bộ trùng
    let article_category = [];
    let tempMap = new Map();
    for (let item of categories) {
        console.log(`catttttt: ${item}`);
        let categoryId = parseInt(item);
        // nếu có cha thì đưa thêm cha vào
        let category = await models.Category.findOne({ where: { id: categoryId } });
        if (category.parentId) {
            const key = `${article.id}_${category.parentId}`;
            tempMap.set(key, { articleId: article.id, categoryId: category.parentId });
        }

        const key = `${article.id}_${categoryId}`;
        tempMap.set(key, { articleId: article.id, categoryId: categoryId });
    }
    tempMap.forEach((value) => {
        article_category.push(value);
    });
    await models.Article_Category.bulkCreate(article_category)

    // xử lí thêm tags
    let article_tag = [];
    tags.forEach((item) => {
        console.log(`tagggggggg: ${item}`);
        article_tag.push({
            articleId: article.id,
            tagId: parseInt(item)
        })
    })
    await models.Article_Tag.bulkCreate(article_tag);

    // hoàn thành việc thêm bài viết
    res.redirect(`/writer`);
};

const getArticles = async (type, page, limit, authorId) => {
    const options = {
        attributes: ['id', 'title', 'abstract', 'createDate'],
        where: { type: type, authorId: authorId },
        order: [['createDate', 'DESC']]
    }
    options.limit = limit;
    options.offset = limit * (page - 1);
    const { rows, count } = await models.Article.findAndCountAll(options);
    rows.forEach(row => {
        row.createDateNew = (new Date(row.createDate)).toLocaleString('vi-VN');
    })
    return { rows, count };
}

controller.showNotApprovedYet = async (req, res) => {
    const userId = req.user.id;
    const writer = await models.Writer.findOne({ where: { userId: userId } });
    const writerId = writer.id;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

    const limit = 5;
    const { rows, count } = await getArticles(NOT_APPROVED_YET, page, limit, writerId);
    const pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    }

    res.locals.pagination = pagination;
    res.locals.articles = rows;

    res.render("writer/not_approved_yet");
};

controller.showWaitingForPublication = async (req, res) => {
    const writer = await models.Writer.findOne({ where: { userId: req.user.id } });
    const writerId = writer.id;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

    const limit = 5;
    const { rows, count } = await getArticles(WAITING_FOR_PUBLICATION, page, limit, writerId);
    const pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    }

    res.locals.pagination = pagination;
    res.locals.articles = rows;


    res.render('writer/waiting_for_publication');
}

controller.showPublished = async (req, res) => {
    const writer = await models.Writer.findOne({ where: { userId: req.user.id } });
    const writerId = writer.id;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

    const limit = 5;
    const { rows, count } = await getArticles(PUBLISHED, page, limit, writerId);
    const pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    }

    res.locals.pagination = pagination;
    res.locals.articles = rows;


    res.render('writer/published');
}

controller.showDenied = async (req, res) => {
    const writer = await models.Writer.findOne({ where: { userId: req.user.id } });
    const writerId = writer.id;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

    const limit = 5;
    const { rows, count } = await getArticles(DENIED, page, limit, writerId);
    const pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query,
    }

    res.locals.pagination = pagination;
    res.locals.articles = rows;


    res.render('writer/denied');
}

controller.showDemoArticle = async (req, res) => {
    const writer = await models.Writer.findOne({ where: { userId: req.user.id } });
    const writerId = writer.id;
    let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id); // id bài viết

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
                model: models.Tag,
                attributes: ["id", "name"]
            }
        ],
        where: { id, authorId: writerId },
    });
    if (!article || (article.type != 1 && article.type != 2 && article.type != 4)) {
        return res.render('thanks', {message: 'Lỗi thông tin bài viết!'});
    }
    article.publishDateNew = new Date(article.publishDate)
        .toLocaleString("vi-VN")
        .slice(10, 19);
    article.contentPara = article.content.split("\n");


    res.locals.article = article;

    res.render('writer/demoArticle')
}

controller.showEditArticle = async (req, res) => {
    const writer = await models.Writer.findOne({ where: { userId: req.user.id } });
    const writerId = writer.id;
    let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id); // id bài viết

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
                model: models.Tag,
                attributes: ["id", "name"]
            }
        ],
        where: { id, authorId: writerId },
    });

    if (!article || (article.type != 1 && article.type != 4)) {
        return res.render('thanks', {message: 'Lỗi thông tin bài viết!'});
    }

    article.contentPara = article.content.split("\n").map(para => {
        return `<p>${para}</p>`
    }).join('');


    res.locals.article = article;



    const categories = await models.Category.findAll({
        order: [['id', 'ASC']]
    });
    const tags = await models.Tag.findAll();

    const categoriesIdSelected = [];
    const categoriesSelected = await models.Article_Category.findAll({
        attributes: ['categoryId'],
        where: {articleId: article.id}
    })
    categoriesSelected.map(item => {
        categoriesIdSelected.push(parseInt(item.categoryId));
    })

    const tagsIdSelected = [];
    const tagsSelected = await models.Article_Tag.findAll({
        attributes: ['tagId'],
        where: {articleId: article.id}
    })
    tagsSelected.map(item => {
        tagsIdSelected.push(parseInt(item.tagId));
    })

    res.locals.categories = categories;
    res.locals.tags = tags;
    res.locals.categoriesIdSelected = categoriesIdSelected
    res.locals.tagsIdSelected = tagsIdSelected

    res.render('writer/editArticle')
}

controller.editArticle = async (req, res) => {
    // kiểm tra user và writer
    const userId = req.isAuthenticated() ? req.user.id : 0;
    const writer = await models.Writer.findOne({
        where: { userId: userId },
    });

    if (!userId || !writer) {
        return res.render("thanks", { message: "Lỗi tài khoản" });
    }

    const articleId = req.params.id;
    console.log(`iddđ: ${articleId}`)
    const article = await models.Article.findOne({
        where: {id: articleId}
    })
    if (!article) {
        return res.render("thanks", { message: "Bài viết không thể được cập nhập" });
    }
    if (article.type != 1 && article.type != 4) {
        return res.render("thanks", { message: "Bài viết không thể được cập nhập" });
    }

    // xử lí hình ảnh
    const storage = multer.diskStorage({
        destination: path.resolve(  // đường dẫn lưu ảnh
            path.join(__dirname, ".."), "./public/images/articles"),
        filename: (req, file, cb) => {  // cấu tạo tên file lưu
            const ext = path.extname(file.originalname);
            const filename = file.fieldname + "-" + Date.now() + ext;
            cb(null, filename);
        },
    });
    // nhận ảnh và lưu ảnh
    const upload = multer({ storage: storage });
    const uploadSingle = util.promisify(upload.single("mainImg"));

    let mainImg = "";
    try {
        await uploadSingle(req, res);
        const img = req.file;
        if (img) {
            mainImg = "/images/articles/" + img.filename;
            console.log(`imgmggggggg ${mainImg}`);
        }
        else {
            mainImg = article.mainImg;
            console.log(`imgmggggggg ${mainImg}`);
        }
    } catch (error) {
        console.error('Lỗi khi tải lên hình ảnh:', error);
        return res.render('thanks', { message: 'Lỗi khi tải lên dữ liệu!' });
    }

    // lấy các giá trị khác của bài viết
    const title = req.body.title;
    const abstract = req.body.abstract;
    const content = req.body.content;
    const createDate = new Date();
    const views = 0;
    const type = 1; //  chưa được duyệt
    const authorId = writer.id;

    if (!title || !abstract || !content) {
        return res.render('post_article', { layout: false, postMessage: "Vui lòng điền đầy đủ các thông tin" });
    }

    // cập nhập lại các giá trị của bài viết
    const articleUpdated = await models.Article.update({
        title,
        abstract,
        content,
        createDate,
        publishDate: sequelize.literal(`NOW() + INTERVAL '${8766} hour'`),
        mainImg,
        views,
        type,
        authorId
    },
    {   
        where: {id: articleId}
    })

    // cập nhập bài viết bị lỗi
    if (!articleUpdated) {
        return res.render('thanks', { message: "Lỗi khi cập nhập dữ liệu bài báo mới!" })
    }
    console.log(`arrticleeeee id ${articleUpdated}`)

    // thêm dữ liệu categories và tags của bài viết vào 2 bảng
    const categories = req.body.categories.split(',');
    const tags = req.body.tags.split(',');

    // xóa đi những categories và tags cũ
    await models.Article_Category.destroy({
        where: {articleId: articleId}
    })
    await models.Article_Tag.destroy({
        where: {articleId: articleId}
    })


    // xử lí thêm categories 
    let tempMap = new Map();
    for (let item of categories) {
        console.log(`catttttt: ${item}`);
        let categoryId = parseInt(item);
        // nếu có cha thì đưa thêm cha vào
        let category = await models.Category.findOne({ where: { id: categoryId } });
        if (category.parentId) {
            const key = `${article.id}_${category.parentId}`;
            tempMap.set(key, { articleId: article.id, categoryId: category.parentId });
        }

        const key = `${article.id}_${categoryId}`;
        tempMap.set(key, { articleId: article.id, categoryId: categoryId });
    }
    tempMap.forEach(async (value) => {
        await models.Article_Category.findOrCreate({
            where: value,
            defaults: value
        })
    });

    // // xử lí thêm tags
    tags.forEach(async (item) => {
        console.log(`tagggggggg: ${item}`);
        await models.Article_Tag.findOrCreate({
            where: {articleId: article.id, tagId: parseInt(item)},
            defaults: {articleId: article.id, tagId: parseInt(item)}
        })
    })

    // hoàn thành việc thêm bài viết
    res.redirect(`/writer`);
}

controller.deleteArticle = async (req, res) => {
    console.log('helklb\n\n\n\hjehjej')
    const reason = req.body.reason; // để đó sau tính
    const articleId = req.body.articleId;

    console.log(`delelelelee: ${articleId}`);

    const article = await models.Article.findOne({
        where: {id: articleId}
    })

    if (!article || (article.type != 1 && article.type != 4)) {
        return res.render('thanks', {message: "Bài viết lỗi, không thể xóa"})
    }

    await models.Article.update({
        type: DELETED
    },
    {
        where: {id: articleId}
    })

    
    res.redirect(req.originalUrl);
}

module.exports = controller;
