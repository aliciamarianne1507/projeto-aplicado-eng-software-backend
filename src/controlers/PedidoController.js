import Pedido from "../models/Pedido";
import uuidv4 from "../functions/uuidGenerate";

class PedidoController {
    async searchAll(req,res){
        const pedidos = await Pedido.findAll()
        if(!pedidos){
            return res.json({message: "Não há produtos cadatrados"})
        }
        else{
            return res.json(pedidos)
        }

    }

    async searchPedidoByID(req,res){
        const {id} = req.params;

        const pedido = await Pedido.findOne({
            where: {
                id: id
            }
        })

        if(!pedido){
            return res.status(400).json({message:"Pedido não existe"})
        }
        else{
            return res.status(200).json(pedido)
        }

    }

    async createNewPedido(req,res){
        const {cpf, quantidade} = req.body
        const uuid = uuidv4();
        console.log(uuid)
        console.log(cpf, quantidade)
        const newPedido = await Pedido.create({
            codigo_pedido: uuid,
            cpf:cpf,
           quantidade: quantidade
        });
        return res.status(200).json(newPedido);


    }

    async updatePedido(req,res){
        const {id} = req.body;

        const pedidoExists = await Pedido.findOne({
            where:{
                id: id
            }
        })

        if(!pedidoExists){
            return res.status(400).json({message: "Pedido não existe"})
        }
        else{
            const pedidoUpdated = await pedidoExists.update(req.body);
            return res.status(200).json(pedidoUpdated);
        }
    }

    async deletePedido(req,res){
        const {id} = req.params;
        const pedidoExist = await Pedido.findOne({
            where:{
                id: id
            }
        })

        if(!pedidoExist){
            return res.status(400).json({message:"Pedido não existe"})
        }
        else{
            await pedidoExist.destroy({
                where:{
                    id: id
                }
            }).then(function () {
                res.status(200).json({message:"Deleted successfully"});
            }).catch(function (error){
                res.status(500).json(error);
            });
        }

    }
}


export default new PedidoController();