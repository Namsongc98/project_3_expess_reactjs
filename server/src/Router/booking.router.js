const express = require("express")
const router = express.Router()
const bookingContronller = require("../Controller/BookingController")

router.get("/",bookingContronller.getBooking)




module.exports = router