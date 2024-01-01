const axios = require("axios");
const { Driver } = require("../../db");

//con la funcion cleanArray lo que hago es limpiar lo que me traigo de la api, osea, extraigo de la api solo los datos que me pide la consigna(el readme)
//modularizo el mapeo para que todo esto que traigo no estè en la función getDrivers 
const cleanArray =(arr) =>{
    return arr.map((driver)=>{
        return{
            id: driver.id,
            forename: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            dob: driver.dob,
            teams: driver.teams,
            created: false,
        };
    });
};

const getDrivers= async() =>{
 //aca tiene que buscar todos los drivers de la api y todos los de la base de datos   
 const driversFromBD = await Driver.findAll();
 
 const driversFromApiRaw = (await axios.get(`http://localhost:5000/drivers`)
 ).data;


 //aca es donde limpio(cleanArray) los datos que traigo de la api(driveresFromApiRaw) y dejo en una nueva constante(driversFromApi)solo los datos que pide el readme
 const driversFromApi = cleanArray(driversFromApiRaw);
 
 const allDrivers = [...driversFromBD,...driversFromApi];

return allDrivers;
 
}

module.exports = {
    getDrivers,
    cleanArray
};