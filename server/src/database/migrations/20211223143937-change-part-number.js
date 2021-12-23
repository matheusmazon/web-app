'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("devices", "partNumber", "part_number");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("devices", "part_number", "partNumber");
  }
};
