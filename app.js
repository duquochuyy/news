'use strict';
const express = require('express');
const models = require('./models');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');
const { createPagination } = require('express-handlebars-paginate');

// cau hinh public start
app.use(express.static(__dirname + '/public'))

// cau hinh su dung express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        createPagination,
    }
}))
app.set('view engine', 'hbs');

app.use(async (req, res, next) => {
    const categories = await models.Category.findAll({
        include: [{
            model: models.Category,
            as: 'children'
        }],
        where: { parentId: null }
    });
    res.locals.categoriesForLayout = categories;

    next();
});

// routes
app.use('/', require('./routes/indexRouter'));
app.use('/articles', require('./routes/articleRouter'));


// khoi dong web server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})