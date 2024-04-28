var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs/promises');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    req.currentDate = new Date();
    next();
});

app.use((req, res, next) => {
    const random = Math.random() * 100;
    if (random >= 50) {
        res.send(`No puedes acceder: ${random}`);
    } else {
        next();
    }
});

app.use(async (req, res, next) => {
    await fs.appendFile('./main.log', `Método: ${req.method}. Url: ${req.url}\n`);
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)

module.exports = app; 