const express = require("express");
const router = express.Router();
const Usercontroller = require("../Controller/UserController.js");
const Authcontroller = require("../Controller/authController.js")
const validateUser = require("../Midlware/validaterUser.js")
const validateLogin = require("../Midlware/validaterUser.js")
const resultValidationUser =  require("../Midlware/validaterUser.js");
const resultValidationLogin =  require("../Midlware/validaterUser.js");
const AuthorizationUser = require("../Midlware/AuthenticationUser.js");

// router user
router.get("/",AuthorizationUser,Usercontroller.getUsers );
router.get("/:id",AuthorizationUser,Usercontroller.getOneUser);
router.post("/post/register",validateUser.validateUser,resultValidationUser.resultValidationUser,Usercontroller.postUser );
router.post("/post/login",validateLogin.validateLogin,resultValidationLogin.resultValidationLogin, Authcontroller);
router.put("/put/:id",AuthorizationUser,Usercontroller.putUser);
router.delete("/delete/:id",AuthorizationUser,Usercontroller.deleteUser)

module.exports = router;
