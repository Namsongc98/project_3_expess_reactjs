const express = require("express");
const userRoter = require("./user.router")
const router = express.Router();
const holtelRouter = require("./hotel.router")
const bookingRouter = require("./booking.router")
const profile = require("./Profile.router")




router.use("/users",userRoter);

router.use("/profile",profile)

router.use("/hotel",holtelRouter)

router.use("/booking",bookingRouter)




module.exports = router