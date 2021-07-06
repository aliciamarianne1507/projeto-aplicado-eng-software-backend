import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Categoria from '../models/Categoria';

import Cliente from '../models/Cliente';
import Produto from "../models/Produto";
import ItemPedido from "../models/ItemPedido";
import Pedido from "../models/Pedido";

const models = [Cliente, Categoria, Produto, ItemPedido, Pedido];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection))
    }
}

export default new Database();