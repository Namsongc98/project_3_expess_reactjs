const connection = require("../concectDatabase");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const getBooking = (req, res) => {
  const query = "SELECT * FROM module_3.booking";
  connection.query(query, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "lỗi",
        err,
      });
    } else {
      res.status(200).json({
        message: "sussess",
        data: data,
      });
    }
  });
};

const postBooking = (req,res)=>{
  
}




module.exports = {
  getBooking: getBooking,
};
