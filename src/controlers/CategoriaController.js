import Categoria from '../models/Categoria';

class CategoriaController {

    async allCategorys(req,res){
        const categorias = await Categoria.findAll()

        res.json(categorias);
    }

    async categoryById(req,res){
        const {id} = req.params;
        const categoria = await Categoria.findOne({
            where: {
               id:id
            }

        })
        if(!categoria ){
            return res.status(400).json({ error: 'Categoria não existe' });
        }

        res.json(categoria);
    }

    async createNewCategory(req,res){
        const {name_categoria} = req.body;
        const categoriaExists = await Categoria.findOne({
            where:{
                name_categoria: name_categoria
        }})
        if(categoriaExists){
            return res.status(400).json({ error: 'Categoria já existe' });
        }
        else{
            const categoria = await Categoria.create(req.body);
            return res.json(categoria)
        }
    }

    // Atualizar categoria: 
    async updateCategory(req,res){
        const { id } = req.body;

        const categoryExists = await Categoria.findOne({
            where: {
                id: id
            }
        })

        if(!categoryExists){
            return res.status(400).json({ error: 'Categoria não existe' });
        }


        const atualizar = await categoryExists.update(req.body)
        return res.json(atualizar)
    }

    async deleteCategory(req,res){

        const { id } = req.params;
        const categoriaExists = await Categoria.findOne({
            where: {
                id: id
            }
        })

        if(!categoriaExists ){
            res.status(404).json({message:"record not found"})
        }
        else{
            await categoriaExists.destroy({
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


export default new CategoriaController();