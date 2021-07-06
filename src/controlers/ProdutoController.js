import Produto from '../models/Produto';
import uuidv4 from "../functions/uuidGenerate";

class ProdutoController {
    // Search all products in database:
    async searchAllProducts(req,res){
        const products = await Produto.findAll()
       if(!products){
           return res.json({message: "Não há produtos cadatrados"})
       }
       else{
           return res.json(products)
       }
    }

    async searchProductByID(req,res){
        const {codigo_produto} = req.params;

        const product = await Produto.findOne({
            where: {
                codigo_produto: codigo_produto
            }
        })

        if(!product){
            return res.status(400).json({message:"The product doesn't exist"})
        }
        else{
            return res.status(200).json(product)
        }

    }

    async createNewProduct(req,res){
        const {name_produto,price_produto,quantidade_produto} = req.body
        const uuid = uuidv4();
        console.log(uuid)
        const newProduct = await Produto.create({
            name_produto: name_produto,
            codigo_produto: uuid,
            price_produto: price_produto,
            quantidade_produto: quantidade_produto
        });
        return res.status(200).json(newProduct);


    }

    async updateProduct(req,res){
        const {codigo_produto} = req.body;

        const productExists = await Produto.findOne({
            where:{
                codigo_produto: codigo_produto
            }
        })

        if(!codigo_produto){
            return res.status(400).json({message: "The product doesn't exists"})
        }
        else{
            const productUpdated = await productExists.update(req.body);
            return res.status(200).json(productUpdated);
        }
    }

    async deleteProduct(req,res){
        const {codigo_produto} = req.params;
            const productExist = await Produto.findOne({
                where:{
                    codigo_produto: codigo_produto
                }
            })

            if(!productExist){
                return res.status(400).json({message:"The product doesn't exists"})
            }
            else{
                await productExist.destroy({
                    where:{
                        codigo_produto: codigo_produto
                    }
                }).then(function () {
                    res.status(200).json({message:"Deleted successfully"});
                }).catch(function (error){
                    res.status(500).json(error);
                });
            }

        }
}


export default new ProdutoController();