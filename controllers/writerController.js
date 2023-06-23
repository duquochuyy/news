"use strict";

const controller = {};
const models = require("../models");
const { Op, literal } = require("sequelize");
const sequelize = require("sequelize");
const multer = require("multer");
const path = require("path");
const util = require('util');

controller.showPostArticle = async (req, res) => {
    const categories = await models.Category.findAll();
    const tags = await models.Tag.findAll();

    res.locals.categories = categories;
    res.locals.tags = tags;

    res.render("post_article");
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
    
    
    // tạo bài viết với đầy đủ các giá trị
    const article =  await models.Article.create({
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
        return res.render('thanks', {message: "Lỗi khi tạo dữ liệu bài báo mới!"})
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
        let category = await models.Category.findOne({where: {id: categoryId}});
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
    res.redirect(`/writer/myArticles`);
};

controller.showMyArticles = async (req, res) => {
    res.render("my_article");
};

module.exports = controller;
