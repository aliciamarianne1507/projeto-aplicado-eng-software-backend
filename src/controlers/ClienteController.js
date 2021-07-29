import Cliente from '../models/Cliente';

class ClienteController {
    async getAllClients(req,res){
        const clientes = await Cliente.findAll()
        if(!clientes){
            return res.status(400).json({ error: 'Usuario não existe' });
        }
        else{
            return res.json(clientes)
        }
    }
    async searchClientByCPF(req,res){
        const {cpf} = req.params;
        const cliente = await Cliente.findOne({
            where: {
                cpf:cpf
            }

        })
        if(!cliente){
            return res.status(400).json({ error: 'Usuario não existe' });
        }

        res.json(cliente);
    }

    //Login
    async login(req,res){
        const {email,senha}= req.body;

        const userExists = await Cliente.findOne({
            where:{
                email:email,
                senha:senha
            }
        })

        if(!userExists){
            return res.status(400).json({ error: 'Usuario não existe' });
        }
        else{
            return res.status(200).json({status: 'Logged with success'})
        }
    }

    // Criar cliente:
    async createNewClient(req,res){
        const {cpf} = req.body;

        const userExists = await Cliente.findOne({
            where:{
                cpf:cpf
            }
        })

        if(userExists){
            return res.status(400).json({ error: 'Usuario já existe' });
        }
        else{
            const cliente = await Cliente.create(req.body);
            return res.json(cliente)
        }
    }

    // Atualizar cliente:
    async updateClient(req,res){
        const { cpf } = req.body;

        const userExists = await Cliente.findOne({
            where: {
                cpf: cpf
            }
        })

        if(!userExists){
            return res.status(400).json({ error: 'Usuario não existe' });
        }

        const atualizar = await userExists.update(req.body)
        return res.json(atualizar)
    }

    // Excluir cliente:

    async deleteClient(req,res){

        const {cpf} = req.params;
        const cliente = await Cliente.findOne({
            where: {
                cpf:cpf
            }

        })

        if(!cliente){
            res.status(404).json({message:"record not found"})
        }
        else{
            await cliente.destroy({
                where:{
                    cpf:cpf
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


export default new ClienteController();
