'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable('itens_pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      codigo_pedido:{
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false,
      },
      codigo_produto:{
        type: Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
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

  down: (queryInterface) => { return queryInterface.dropTable('itens_pedidos');}
};
