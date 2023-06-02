const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const hostName = "localhost";
const port = 8080;

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use(cors());

server.get("/",(req,res)=>{
 res.send("hello");
})

server.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})
