const mysql = require("mysql")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"module_3",
    password:"12345678",
});

// connection.connect((err)=>{
//     if(err){
//         console.log("lỗi kết nối")
//     }else{
//         console.log("kết nối thành công")
//     }
// })

module.exports = connection