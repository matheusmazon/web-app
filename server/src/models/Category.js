const { Model, DataTypes } = require("sequelize");

class Category extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }

    // relationship
    static associate(models) {
        this.hasMany(models.Device, { foreignKey: "category_fk", as: "categories" });
    }
}

module.exports = Category;