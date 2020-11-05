const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./autor");
//const Autor = require("./autor");

class Mensaje extends Model {

    static init(connection) {
        connection.define("Mensaje", {
            fechaHora: DataTypes.DATE,
            texto: DataTypes.STRING
        });        

    }
}




module.exports = Mensaje;