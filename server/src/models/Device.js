const { Model, DataTypes } = require("sequelize");

class Device extends Model {
    static init(connection) {
        super.init({
            color: DataTypes.STRING,
            partNumber: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }

    // relationship
    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: "category_fk", as: "category" });
    }
}

module.exports = Device;