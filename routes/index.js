var express = require('express');
const Mensaje = require('../models/mensaje');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let mensajes = await Mensaje.findAll();
  if (mensajes) {
    res.render('index', { title: 'Express', mensajes });
  } else {
    res.render('index',  { title: 'Express', mensajes: [] })
  }
});


router.post('/publicar', async function (req, res) {
  await Mensaje.create({...req.body, fechaHora: new Date()});
  res.redirect('/');
});

module.exports = router;
