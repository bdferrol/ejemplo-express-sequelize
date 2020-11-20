/**
 * Módulo de autenticación y autorización.
 * @module auth
 */

/**
 * Esta función comprueba si el usuario ha iniciado sesión
 * previamente. En ese caso, le permite continuar; si no, lo redirige
 * a login.
 * @param {*} req Petición
 * @param {*} res Respuesta
 * @param {*} next Siguiente paso en Express
 */
function necesitaAutenticacion(req, res, next) {
    if (req.session.usuario) next();
    else res.redirect("/login");
}

/**
 * Esta función comprueba que el usuario ha iniciado sesión y que además
 * tiene privilegios de administrador. En caso afirmativo, le permite
 * continuar. En caso de no tenerlo o no estar logueado, le redirige a login.
 * @param {*} req Petición
 * @param {*} res Respuesta
 * @param {*} next Siguiente paso
 */
function necesitaAdmin(req, res, next) {
    if (req.session.usuario && req.session.usuario.isAdmin) next();
    else res.redirect("/login");
}

module.exports = { necesitaAutenticacion, necesitaAdmin };