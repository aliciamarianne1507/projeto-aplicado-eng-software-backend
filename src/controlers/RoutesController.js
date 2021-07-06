class Routes {
    index(req,res){
        res.json({
            tudoCerto: true,
        });
    }
}


export default new Routes();