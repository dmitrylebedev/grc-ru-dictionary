const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session); // TODO: add
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const expressValidator = require('express-validator'); // TODO: add
const errorHandlers = require('./handlers/errorHandlers');
const helpers = require('./helpers/index');

// create express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// serves up static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass variables to templates + all requests
app.use((req, res, next) => {
  res.locals.helpers = helpers;
  res.locals.currentPath = req.path;
  next();
});

// after all that above middleware, handle routes
app.use('/', routes);

// page not found error handler
app.use(errorHandlers.notFound);

// production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
