const { Model, DataTypes } = require("sequelize");

class Mensaje extends Model {

    static init(connection) {
        Model.init({
            fechaHora: DataTypes.DATE,
            texto: DataTypes.STRING
        }, {
            sequelize: connection,
            modelName: "Mensaje"
        });        
    }
}




module.exports = Mensaje;