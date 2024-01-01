
const { Driver } = require("../../db");


const postDriversDB = async ( forename, surname, nationality, image, dob, description, teams ) =>
   await Driver.create({ forename, surname, nationality, image, dob, description, teams});

 module.exports = {
    postDriversDB
 };