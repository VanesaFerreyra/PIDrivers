const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))

//el force: true ==> si queda en true, al momento de cerrar la base de datos y volver a levantar el proyecto, la base de datos se  borra 


//el force: false ==> si se pone en false, al momento de cerrar la base de datos, todos los drivers creados en la base de datos quedan guardados y no se borran
