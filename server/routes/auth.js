const express = require('express');

const router = express.Router();
const authManager = require('../manager/auth');

const isAuth = (req, res, next) => {
  if (req.session.token) next();
  else res.redirect('/login');
};

router.post('/register', (req, res, next) => {
  authManager
    .registerUser(req.body)
    .then(() => res.redirect('../login'))
    .catch(err => next(err));
});

router.post('/login', (req, res, next) => {
  authManager
    .verifyCredentials(req.body)
    .then((result) => {
      if (result) {
        req.session.token = req.sessionID;
        res.redirect('../secretpage');
      } else res.send('Login error');
    })
    .catch(err => next(err));
});

router.get('/logout', (req, res, next) => {
  req.session.token = null;
  res.redirect('/');
});

router.get('/secretpage', isAuth, (req, res, next) => {
  res.send('SECRETIKI');
});

module.exports = router;
