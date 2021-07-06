import Sequelize, {Model} from 'sequelize';
class Categoria extends Model{
    static init(sequelize){
        super.init({
            name_categoria: Sequelize.STRING,
            codigo_categoria: Sequelize.UUID
        },
        {
            sequelize,
            modelName: 'Categoria',
            tableName: 'categorias',
        })
    }
}

export default Categoria;