import ItemPedido from "../models/ItemPedido";

class ItemPedidosController {
    async searchItem(req,res){
        const {id} = req.params;

        const itemExists = await ItemPedido.findOne({
            where:{
                id:id
            }
        })

        if(!itemExists){
            return res.status(400).json({message: "The Item doesn't exists"})
        }
        else{
            return res.status(200).json(itemExists)
        }
    }

    async crateItem(req,res){
        const newItem = await ItemPedido.create(req.body);
        return res.status(200).json(newItem);
    }

    async updateItem(req,res){
        const {id} = req.body;

        const itemExists = await ItemPedido.findOne({
            where:{
                id:id
            }
        })

        if(!itemExists){
            return res.status(400).json({message: "The Item doesn't exist"})
        }
        else{
            const updated = await itemExists.update(req.body)
            return res.json(updated)
        }
    }

    async deleteItem(req,res){
        const {id} = req.params;

        const itemExists = await ItemPedido.findOne({
            where:{
                id:id
            }
        })

        if(!itemExists){
            return res.status(400).json({message: "The Item doesn't exist"})
        }
        else{
            await itemExists.destroy({
                where:{
                    id: id
                }
            }).then(function () {
                res.status(200).json({message:"Deleted successfully"});
            })
                .catch(function (error){
                    res.status(500).json(error);
                });
        }
    }
}


export default new ItemPedidosController();