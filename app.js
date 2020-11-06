var createError = require('http-errors');
var express = require('express');
var path = require('path');

// Estos dos módulos se utilizan para manejar la sesión del usuario mediante cookies.
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var logger = require('morgan');
const {Sequelize} = require('sequelize');
const Mensaje = require('./models/mensaje');
const Autor = require("./models/autor");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cookieSession({
  name: 'sesion', //nombre de la cookie
  keys: ["aaaaaaaaaa", "bbbbbbbbb"],  //claves para firmar la cookie
  maxAge: 5 * 60 * 1000 //caducidad en milisegundos
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

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


/* Establecemos la conexión con la base de datos. Primeramente hay que definir el objeto
connection, que contendrá los datos de acceso a la base de datos que queremos usar. Una vez
definido, llamamos al método authenticate para iniciar la conexión.

El método autenticate devuelve una promesa (Promise), lo que quiere decir que el establecimiento
de la conexión con la base de datos ocurre de forma no bloqueante. El control es devuelto a nuestro
programa de forma inmediata.

Necesitamos realizar algunas operaciones con la base de datos una vez que se establezca la
conexión. A esa promesa que nos devuelve authenticate le podemos indicar algunas instrucciones para
que las ejecute una vez que la conexión se establezca: es por eso que añadimos la llamada then. Y si
ocurriese algún error durante la conexión, incorporamos también una llamada a catch.

Tanto then como catch reciben como único parámetro una función (utilizamos en ambos casos funciones
anónimas en línea). Esas funciones contienen esas instrucciones que queremos lanzar en diferido,
cuando la conexión se establezca o cuando falle.
*/
const connection = new Sequelize("mariadb://root@127.0.0.1:3306/test");
connection.authenticate().then(() => {

  //1. Inicialización de los modelos
  Mensaje.init(connection);
  Autor.init(connection);

  //2. Declaración de las relaciones
  Autor.hasMany(Mensaje);
  Mensaje.belongsTo(Autor);

  //3. Creación de tablas en las BD
  connection.sync();
})
.catch(err => {
  console.log(err);
  
});

module.exports = app;
