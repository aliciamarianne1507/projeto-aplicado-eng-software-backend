'use strict';
module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      codigo_pedido:{
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true
      },
      quantidade: {
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

  down: (queryInterface) => { return queryInterface.dropTable('pedidos');}
};
