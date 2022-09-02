const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const AssignmentController =require("../controllers/assignmentController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/getSortedCities", AssignmentController.getSortedCities )
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getbyPin)
router.get("/cowin/getByDistrict",CowinController.getDistrictSessions)
router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/meme", AssignmentController.getMemes)
router.post("/creatememe", AssignmentController.myMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;