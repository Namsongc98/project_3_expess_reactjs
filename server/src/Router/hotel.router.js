const express = require("express");

const router = express.Router();
const hotelContronller = require("../Controller/HotelController");







router.get("/",hotelContronller.getHotel)

router.post("/addhotel",hotelContronller.manyFile,hotelContronller.postHotel)


module.exports = router