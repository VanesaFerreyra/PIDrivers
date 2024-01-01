const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const cors = require("cors");

const server = express();



server.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
server.use(bodyParser.json({limit: "50mb"}));
server.use(cookieParser());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST, OPTIONS, PUT, DELETE");
    next();
});
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(mainRouter);

module.exports = server;
