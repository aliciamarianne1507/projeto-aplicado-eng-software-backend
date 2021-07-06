import Sequelize, {Model} from "sequelize";

class Produto extends  Model {
    static init(sequelize) {
        super.init({
                codigo_produto: Sequelize.UUID,
                name_produto: Sequelize.STRING,
                quantidade_produto: Sequelize.INTEGER,
                price_produto: Sequelize.FLOAT
            },
            {
                sequelize,
                modelName: 'Produto',
                tableName: 'produtos',
            })
    }
}

export default Produto;