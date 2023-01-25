// import
const express = require("express");
const router = express.Router();

const artistController = require("../controller/artists.controller");
const jwtCheck = require("../middlewares/jwtCheck.middleware");


router.get("/get", artistController.getAllArtists)
router.get("/prueba", jwtCheck, (req,res) => {
    return res.json({
        mensaje:"hola"
    })
})


router.post("/new", jwtCheck, artistController.userToArtist)


module.exports = router;