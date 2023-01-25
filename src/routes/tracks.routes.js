// import
const express = require("express");
const router = express.Router();

const trackController = require("../controller/tracks.controller");
const jwtCheck = require("../middlewares/jwtCheck.middleware");



router.get("/get", trackController.getAllTracks)



router.put("/edit/:id", jwtCheck, trackController.editTrack)



router.post('/new', jwtCheck, trackController.newTrack)



router.delete('/delete/:id', jwtCheck, trackController.deleteTrack)





module.exports = router;
