/**
 * @module routes_index
 */


var express = require('express');
const Mensaje = require('../models/mensaje');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let usuario = req.session.usuario;

  if (usuario) {
    // ...
  }

  let mensajes = await Mensaje.findAll();
  if (mensajes) {
    res.render('index', { title: 'Express', mensajes });
  } else {
    res.render('index',  { title: 'Express', mensajes: [] })
  }
});

/**
 * Publicar un nuevo mensaje.
 * 
 * @name POST /publicar
 * @function
 * @param {*} req Datos de la petición.
 * @param {*} res Respuesta a la petición.
 */
router.post('/publicar', async function (req, res) {
  await Mensaje.create({...req.body, fechaHora: new Date()});
  res.redirect('/');
});

module.exports = router;
