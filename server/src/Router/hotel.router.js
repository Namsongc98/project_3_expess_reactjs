const express = require("express");

const router = express.Router();
const hotelContronller = require("../Controller/HotelController");



router.get("/",hotelContronller.getHotel)
router.post("/addhotel",hotelContronller.fileHotel)
router.delete("/deletehotel/:id",hotelContronller.deleteHotel)
router.post("/getcity/",hotelContronller.getHotelCity)
router.post("/gethotel/:id",hotelContronller.getHotelid)
router.get("/gethotelDetail/:id",hotelContronller.getHotelid)
router.put("/updatehotel/:id",hotelContronller.updateHotel)

module.exports = router