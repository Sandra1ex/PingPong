const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const getUser = require('../middleware/getUser');
const reactSSR = require('../middleware/reactSSR');

const sessionConfig = {
  store: new FileStore(),
  secret: 'secret',
  resave: false,
  name: 'user_sid',
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

module.exports = function configApp(app) {
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static('public'));
  app.use(getUser);
  app.use(reactSSR);
};
