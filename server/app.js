const express = require('express');
const path = require('path');
const session = require('express-session');
const logger = require('morgan');
const genuuid = require('uuid/v1');

const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  genid: () => genuuid(),
  secret: 'jhg4534gh53j45hg3j4hg',
  resave: false,
  saveUninitialized: true,
}));
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use((req, res, next) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
