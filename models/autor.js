/**
 * @module models/autor
 */

const { Model, DataTypes } = require("sequelize");
//const Mensaje = require("./mensaje");

/**
 * Modelo de autor con los correspondientes campos.
 * @class Autor
 */
class Autor extends Model {

    static init(connection) {
        super.init({
            nombre: {type: DataTypes.STRING, allowNull: false},
            email: {type: DataTypes.STRING, allowNull: false, unique: {args:true, msg:"Error de correo repetido"}},
            password: {type: DataTypes.STRING, allowNull: false},
        }, {
            sequelize: connection,
            modelName: "Autor",
            tableName: "Autores"
        });       
    }
}




module.exports = Autor;