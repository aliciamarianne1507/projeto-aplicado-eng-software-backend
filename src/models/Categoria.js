import Sequelize, {Model} from 'sequelize';
class Categoria extends Model{
    static init(sequelize){
        super.init({
            name_categoria: Sequelize.STRING,
        },
        {
            sequelize,
            modelName: 'Categoria',
            tableName: 'categorias',
        })
    }
}

export default Categoria;