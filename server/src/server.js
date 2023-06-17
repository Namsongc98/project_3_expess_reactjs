const express = require("express");
const server = express();
const cors = require("cors");
const hostName = "localhost";
const port = process.env.PORT || 8080;
const router = require("./Router/index.js")
server.use(express.static('src/public'))
require("dotenv").config()
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

server.use("/",router)

server.get("/",(req,res)=>{
    res.send("hello word")
})

server.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})
