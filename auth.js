function necesitaAutenticacion(req, res, next) {
    if (req.session.usuario) next();
    else res.redirect("/login");
}

function necesitaAdmin(req, res, next) {
    if (req.session.usuario && req.session.usuario.isAdmin) next();
    else res.redirect("/login");
}

module.exports = { necesitaAutenticacion, necesitaAdmin };