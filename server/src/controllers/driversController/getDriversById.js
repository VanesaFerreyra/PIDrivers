const axios = require("axios")
const { Driver } = require("../../db")

const getDriversById = async (id, source) =>{
    const driver = 
    source === "api" 
    ? (await axios.get(`http://localhost:5000/drivers/${id}`))
    .data
    : await Driver.findByPk(id);
    
    //const driver = drivers.find((dr) => dr.id == id);
    
    return driver;
};

module.exports = {
    getDriversById
};