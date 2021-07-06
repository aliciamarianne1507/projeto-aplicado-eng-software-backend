'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      codigo_produto:{
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name_produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price_produto: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      quantidade_produto:{
        type: Sequelize.INTEGER,
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

  down: (queryInterface) => { return queryInterface.dropTable('produtos');}
};
