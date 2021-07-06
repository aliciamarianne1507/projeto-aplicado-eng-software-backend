import { Router } from 'express';
import ClienteController from '../controlers/ClienteController';
import CategoriaController from '../controlers/CategoriaController';
import ProdutoController from "../controlers/ProdutoController";
import ItemPedidosController from "../controlers/ItemPedidosController";
import PedidoController from "../controlers/PedidoController";



const routes = new Router();

//Cliente CRUD:


routes.get('/cliente', ClienteController.getAllClients); //Buscar todos os clientes
routes.get('/cliente/:cpf', ClienteController.searchClientByCPF); //Buscar cliente especifico

routes.get('/cliente', ClienteController.login); // Fazer login usuário

routes.post('/cliente', ClienteController.createNewClient); // Criar cliente

routes.put('/cliente', ClienteController.updateClient); // Atualizar cliente

routes.delete('/cliente/:cpf', ClienteController.deleteClient); // Exlcuir cliente


//Categoria CRUD:


routes.get('/categoria', CategoriaController.allCategorys); //Buscar categorias

routes.get('/categoria/:id', CategoriaController.categoryById); //Buscar categorias

routes.post('/categoria', CategoriaController.createNewCategory); //Criar categoria especifica

routes.put('/categoria/', CategoriaController.updateCategory); //Atualizar categoria especifica

routes.delete('/categoria/:id', CategoriaController.deleteCategory); //Excluir categoria especifica


// Produto CRUD:

routes.get('/produto', ProdutoController.searchAllProducts);

routes.get('/produto/:codigo_produto', ProdutoController.searchProductByID);

routes.post('/produto', ProdutoController.createNewProduct);

routes.put('/produto', ProdutoController.updateProduct);

routes.delete('/produto/:codigo_produto', ProdutoController.deleteProduct);

//Pedidos CRUD:

routes.get('/pedidos', PedidoController.searchAll);

routes.get('/pedidos/:id', PedidoController.searchPedidoByID);

routes.post('/pedidos',PedidoController.createNewPedido);

routes.put('/pedidos', PedidoController.updatePedido);

routes.delete('/pedidos/:id', PedidoController.deletePedido);


// Item Pedidos CRUD:

routes.get('/itempedido/:id', ItemPedidosController.searchItem);

routes.post('/itempedido', ItemPedidosController.crateItem);

routes.put('/itempedido', ItemPedidosController.updateItem);

routes.delete('/itempedido/:id', ItemPedidosController.deleteItem);

export default routes;