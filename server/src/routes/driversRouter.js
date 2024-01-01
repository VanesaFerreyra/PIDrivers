const { Router } = require("express");

const {  getDetailHandler, getNameHandler, createDriversHandler, getDriversHandler}= require("../handlers/driversHandler");

const driversRouter = Router();


driversRouter.get(`/name?="..."`, getNameHandler)

driversRouter.get("/:id", getDetailHandler)

driversRouter.post("/", createDriversHandler);

driversRouter.get("/", getDriversHandler);

//driversRouter.put("/:id", (req, res)=>{
//    res.send("ruta para modificar un drivers")
//})

driversRouter.delete("/:id", (req, res)=>{
    res.send("ruta para eliminar un drivers")
})


module.exports = driversRouter;