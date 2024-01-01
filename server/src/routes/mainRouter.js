const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");

const mainRouter = Router();

mainRouter.use("/drivers", driversRouter);

mainRouter.use("/teams", teamsRouter);

mainRouter.use("*", (req, res)=>{
    res.status(404).json({error: "Not found"});
});


module.exports = mainRouter;
