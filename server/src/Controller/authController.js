
const connection = require("../concectDatabase.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const postLogin = (req, res) => {
    const { email_user, password_user } = req.body;
    const queryOne = "SELECT * FROM module_3.users WHERE  email_user= ?";
    connection.query(queryOne, [email_user], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: err,
        });
      } else {
        if (result.length == 0) {
          
          return res.status(400).json({
            status:400,
            message: "Email không tồn tại",
          });
        } else {
          const user = result[0];
          bcrypt.compare(password_user, user.password_user, (err, isMatch) => {
            if (err) {
              return res.status(500).json({
                status: 500,
                message: err,
              });
            } else {
              if (!isMatch) {
                return res.status(401).json({
                  status:401,
                  message: "Email hoặc mật khẩu không đúng",
                });
              } else {
                //Authorization
                const token = jwt.sign({ id: user.id_user,roles:"user" }, process.env.SECRET, {
                  expiresIn: "4h",
                });
               return res.status(200).json({
                  status: 200,
                  message: "Đăng nhập thành công",
                  data:user,
                  token
                });
              }
            }
          });
        }
      }
    });
  };


module.exports = postLogin