const axios = require("axios");
const { Driver } = require("../../db");
const { cleanArray } = require("../driversController/getDrivers")

const getDriversName = async (name) =>{
    const driversFromBD = await Driver.findAll({where: {forename: forename}});

    const driversFromApiRaw = (await axios.get(`http://localhost:5000/drivers`)).data;

    const driversFromApi = cleanArray(driversFromApiRaw);

    const filteredApi = driversFromApi.filter((driver) => driver.forename === name);

    return [...filteredApi,...driversFromBD ];
}


module.exports = {
    getDriversName
}

