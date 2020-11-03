const { Model, Sequelize, DataTypes } = require("sequelize");

class Mensaje extends Model {

}

const connection = new Sequelize("mariadb://root:maria123@localhost:3306/tuitel");

Mensaje.init({
    fechaHora: DataTypes.DATE,
    texto: DataTypes.STRING
}, {
    sequelize: connection,
    modelName: "Mensaje"
});

module.exports = Mensaje;