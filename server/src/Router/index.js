const express = require("express");
const userRoter = require("./user.router")
const router = express.Router();
const holtelRouter = require("./hotel.router")



router.use("/users",userRoter);

router.use("/hotel",holtelRouter)


module.exports = router