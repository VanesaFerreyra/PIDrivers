const getTeamsHandler = (req,res) =>{
    
    res.status(200).json("Todos los teams existentes de la API")
};

module.exports = {
    getTeamsHandler,
};