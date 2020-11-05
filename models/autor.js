const { Model, DataTypes } = require("sequelize");
//const Mensaje = require("./mensaje");

class Autor extends Model {

    static init(connection) {
        super.init({
            nombre: DataTypes.STRING
        }, {
            sequelize: connection,
        });       
    }
}




module.exports = Autor;