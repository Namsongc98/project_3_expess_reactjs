const express = require("express")
const router = express.Router()
const contronllerProfile = require("../Controller/profile")

router.get("/",contronllerProfile.getProfile)
router.post("/postprofile",contronllerProfile.postProfile)
router.get("/getprofileuser/:id",contronllerProfile.getProfileUser)
router.get("/getprofilelogin/:id",contronllerProfile.getProfileLogin)


module.exports = router

