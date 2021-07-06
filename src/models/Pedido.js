import Sequelize, {Model} from "sequelize";

class Pedido extends Model{
    static init(sequelize){
        super.init({
            codigo_pedido: Sequelize.UUID,
            cpf: Sequelize.STRING,
            quantidade: Sequelize.INTEGER
        },{
            sequelize,
            modelName: 'Pedido',
            tableName: 'pedidos',
        })
    }
}

export default Pedido;