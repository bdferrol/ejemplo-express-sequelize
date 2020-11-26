const { Model, DataTypes } = require("sequelize");

class Mensaje extends Model {

    static init(connection) {
        super.init({
            fechaHora: DataTypes.DATE,
            texto: DataTypes.STRING
        }, {
            sequelize: connection,
            modelName: "Mensaje",
        });
    }
}




module.exports = Mensaje;