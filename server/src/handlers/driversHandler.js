const { getDriversName } = require("../controllers/driversController/getDriversName");
const { getDrivers } = require ("../controllers/driversController/getDrivers");
const { getDriversById } = require("../controllers/driversController/getDriversById");
const { postDriversDB } = require("../controllers/driversController/postDriversDB");



//  hay que traer 15 primeros usuarios por query
const getNameHandler = async (req,res) =>{
    const {name} = req.query
    
    try {
        const results = await getDriversName(name);
        res.status(200).json(results);
    
    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    };

    // este viende de la ruta   /:id => este id es lo que conocemos como params
const getDetailHandler = async (req,res) =>{
    //aca se define si el id es un numero que lo busque en la api y;
    //si el id es un string que lo busque en la BD (base de datos)
    
    //"hrpijfk3g5fre55d" ==> NaN ==>source ="bdd"
    // 5 ==> 5 ==> source="api"
    try {
        const {id} = req.params;
        
        const source = isNaN(id)?"db" : "api"
        const driver = await getDriversById(id,source); //aca se manda el id que quiero buscar junto con la fuente
        res.status(200).json(driver);
    
    
    } catch (error) {
        res.status(400).json({error:'Falta enviar datos obligatorios'});
    }
    };
        
    
    // body ===> información
    const createDriversHandler = async(req,res) =>{
       const {forename, surname, nationality, image, dob, description, team}= req.body;
    
       try {
        const response = await postDriversDB( forename, surname, nationality, image, dob, description, team)
        res.status(200).json(response)
       } catch (error) {
         res.status(400).json({error:error.message})
       }
    };


// query
const getDriversHandler = async(req,res) =>{
    const {name} = req.query

    try {
       const allDrivers =  await getDrivers(name);
        res.status(200).json(allDrivers)
    } catch (error) {
        res.status(400).json({error: "error al obtener datos"});
    }
    };



//formas de enviar información a nuestro back-end
// params ==> /:id
// query ===> ?name=name&raza=raza
// body ==> info

module.exports= {
    getNameHandler,
    getDetailHandler,
    getDriversHandler,
    createDriversHandler,
};

//handler se encarga de :
//1)recibir la request
//2)unificar datos
//devolver la respuesta

//el handler invoca al controller --->>>EL HANDLER NUNCAAA INTERACTUA CON FUENTES EXTERNAS DE INFORMACIÓN, es decir, el handler nunca va a llamar ni a la api ni tampoco a la base de datos
//el controller es el que interactúa con la api y con la base de datos(fuentes externas)
//el controller es otra función
