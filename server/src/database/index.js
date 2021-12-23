const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Device = require("../models/Device");
const Category = require("../models/Category");

const connection = new Sequelize(dbConfig);

Device.init(connection);
Category.init(connection);

Device.associate(connection.models);
Category.associate(connection.models);

module.exports = connection;