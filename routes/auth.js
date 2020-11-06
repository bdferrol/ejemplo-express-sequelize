var express = require('express');
var router = express.Router();

function mostrarFormularioLogin(req, res) {
    res.render("login");
}

function autenticarUsuario(req, res) {
    
}


router.get("/login", mostrarFormularioLogin);
router.post("/login", autenticarUsuario);

module.exports = router;