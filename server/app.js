const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use((req, res, next) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
