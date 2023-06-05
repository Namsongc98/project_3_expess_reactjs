const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();
const hostName = "localhost";
const port = 8080;
const routerUser = require("./Router/user.router.js")

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(cors());

server.use("/api/v1/users",routerUser)

server.get("/",(req,res)=>{
 res.send("hello");
})


server.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})
