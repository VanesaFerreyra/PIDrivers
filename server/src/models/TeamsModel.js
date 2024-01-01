const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Team', {
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
    teams: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
};

//MODELO 2 | Teams**

//-  ID. \*
//-  Nombre. \*