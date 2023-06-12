const connection = require("../concectDatabase.js");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// getAll
const getUsers = (req, res) => {
  const query = "SELECT * FROM module_3.users";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        status: "lỗi",
        err: err,
      });
    } else {
      res.status(200).json({
        status: "thành công",
        data: result,
      });
    }
  });
};

//post tạo User
const postUser = (req, res) => {
  const { firstname, lastname, email_user, password_user, roles } = req.body;
//hash password
  bcrypt.hash(password_user, 10, (err, hash) => {
    if (err) {
      //check lỗi hash
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
        //query check one
      const queryOne = `SELECT * FROM module_3.users WHERE  email_user= ?`;
      connection.query(queryOne, [email_user], (err, result) => {
        if (err) {
          res.json({
            status: 500,
            message: err,
          });
        } else {
          const id_user = uuidv4();
          if (result.length == 0) {
            const values = [
              id_user,
              firstname,
              lastname,
              email_user,
              hash,
              roles,
            ];
           
            const query =
              "insert into module_3.users (id_user,firstname, lastname, email_user, password_user,roles) values (?,?,?,?,?,?)";
            connection.query(query, values, (err,result) => {
              if (err) {
                res.status(500).json({
                  status: 500,
                  message: err,
                });
              } else {
                const findUser = values[0];
                let token = jwt.sign(
                  { id: findUser.id_user },
                  process.env.SECRET,
                  {
                    expiresIn: "1h",
                  }
                );
                res.status(200).json({
                  status: 200,
                  message: "Post thành công",
                  token: token,
                });
              }
            });
          } else {
            
            return res.status(400).json({
              
              status: 400,
              message: "Trùng Email",
            });
          }
        }
      });
    }
  });
};



//get One
const getOneUser = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM module_3.users WHERE id_user = ?;`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "FAILED",
        message: `lỗi ${err}`,
      });
    } else {
      if (result) {
        return res.status(200).json({
          status: "Ok",
          message: result,
        });
      } else {
        return res.status(200).json({
          status: "ok",
          message: "không tìm thấy tên người dùng trong hệ thống",
        });
      }
    }
  });
};

//put User
const putUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email_user, password_user, roles } = req.body;

  bcrypt.hash(password_user, 10, (err, hash) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      const newUser = [firstname, lastname, email_user, hash, roles, id];
      const query =
        "UPDATE module_3.users SET firstname = ?, lastname = ?, email_user =? ,password_user=?, roles=? WHERE id_user = ?;";
      connection.query(query, newUser, (err, result) => {
        if (err) {
          res.status(500).json({
            status: "FAILED",
            message: err,
          });
        } else {
          res.status(200).json({
            status: "ok",
            message: "update thành công",
          });
        }
      });
    }
  });
};

//delete
const deleteUser = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM module_3.users WHERE id_user = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({
        status: "failed",
        message: err,
      });
    } else {
      res.status(200).json({
        status: "ok",
        message: "xóa thành công",
      });
    }
  });
};

module.exports = {
  getUsers: getUsers,
  getOneUser: getOneUser,
  postUser: postUser,
  putUser: putUser,
  deleteUser: deleteUser,
};
