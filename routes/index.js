var express = require('express');
const Mensaje = require('../models/mensaje');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express', mensajes: await Mensaje.findAll() });
});


router.post('/publicar', async function (req, res) {
  await Mensaje.create(req.body);
  res.redirect('/');
});

module.exports = router;
