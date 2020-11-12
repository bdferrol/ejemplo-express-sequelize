const { Model, DataTypes } = require("sequelize");
//const Mensaje = require("./mensaje");

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