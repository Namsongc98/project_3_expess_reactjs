const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWOED,
});

// connection.connect((err,result)=>{
//     if(err){
//         console.log("lỗi")
//     }else{
//         console.log("thành công")
//     }
// })
module.exports = connection;
