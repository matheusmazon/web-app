'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "devices", 
      "category_fk", 
      { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "categories", key: "id" },
        onDelete: "CASCADE"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("devices", "category_fk");
  }
};
