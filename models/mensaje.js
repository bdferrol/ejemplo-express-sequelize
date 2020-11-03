const { Model, Sequelize, DataTypes } = require("sequelize");

class Mensaje extends Model {

}


Mensaje.init({
    fechaHora: DataTypes.DATE,
    texto: DataTypes.STRING
}, {
    sequelize: connection,
    modelName: "Mensaje"
});

module.exports = Mensaje;