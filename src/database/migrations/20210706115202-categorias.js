'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      codigo_categoria:{
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name_categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => { return queryInterface.dropTable('categorias');}
};
