const { Model, DataTypes } = require("sequelize");
//const Mensaje = require("./mensaje");

class Autor extends Model {

    static init(connection) {
        connection.define("Autor", {
            nombre: DataTypes.STRING
        });        
    }
}




module.exports = Autor;