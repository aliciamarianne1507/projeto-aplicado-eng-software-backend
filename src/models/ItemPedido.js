import Sequelize, {Model} from "sequelize";

class ItemPedido extends Model{
    static init(sequelize){
        super.init({
            codigo_pedido: Sequelize.UUID,
            codigo_produto: Sequelize.UUID,
            quantidade: Sequelize.INTEGER
        },{
            sequelize,
            modelName: 'ItemPedido',
            tableName: 'itens_pedidos',
        })
    }
}

export default ItemPedido;