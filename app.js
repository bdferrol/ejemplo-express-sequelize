var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {Sequelize} = require('sequelize');
const Mensaje = require('./models/mensaje');
const Autor = require("./models/autor");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



const connection = new Sequelize("mariadb://rootu:maria123@127.0.0.1:3306/test");
connection.authenticate().then(() => {

  Mensaje.init(connection);
  Autor.init(connection);

  Autor.hasMany(Mensaje);
  Mensaje.belongsTo(Autor);

  connection.sync();
})
.catch(err => {
  console.log(err);
  
});

module.exports = app;
