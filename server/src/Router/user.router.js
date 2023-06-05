const express = require("express");
const routerUser = express.Router();
const connection = require("../concectDatabase.js");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

routerUser.use(bodyParser.json());
routerUser.use(bodyParser.urlencoded({ extended: true }));

routerUser.get("/", (req, res) => {
  const query = "SELECT * FROM module_3.users";
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
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
});


routerUser.post("/",  (req, res) => {
  const { firstname, lastname, email_user, password_user } = req.body;
  const id_user = uuidv4();
  bcrypt.hash(password_user, 10, (err, hash) => {
    if (err) {
      res.status(500).json({
        status: 500,
        messager: err,
      });
    } else {
      const values = [id_user, firstname, lastname, email_user, hash];
      const query =
        "insert into module_3.users (id_user,firstname, lastname, email_user, password_user) values (?,?,?,?,?)";
      connection.query(query, values, (err) => {
        if (err) {
          res.status(500).json({
            status: 500,
            messager: err,
          });
        } else {
          res.status(200).json({
            status: 200,
            messager: "Post thành công",
          });
        }
      });
    }
  });
});

module.exports = routerUser;
