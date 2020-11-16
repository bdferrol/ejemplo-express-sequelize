var express = require('express');
var Autor = require('../models/autor');


var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuarios = await Autor.findAll();
  res.render("lista-usuarios", {usuarios});
});

router.get('/nuevo', function (req, res) {
  res.render("registro-usuario");
})

router.post('/nuevo', async function (req, res) {
    // Obtención de los datos del formulario
    let {nombre, email, password, repassword} = req.body;

    if (password == repassword) {
      let usuario = new Autor({nombre, email, password});
      try {
        await usuario.save();
        res.redirect("/usuarios");
      } catch(err) {
        res.render("registro-usuario", {error: err.message})        
      }
    } else {
      res.render("registro-usuario", {error: "Password no coincide"})
      //TODO: mostrar error
    }
})


router.get('/:id', function (req, res) {
  res.render("detalle-usuario");  
})

router.post('/:id', function (req, res) {
  
})



module.exports = router;
