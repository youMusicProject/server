// import
const express = require("express");
const router = express.Router();

const albumController = require("../controller/albums.controller");
const jwtCheck = require("../middlewares/jwtCheck.middleware");



router.get("/get", albumController.getAllAlbums)



router.put("/edit/:id", jwtCheck, albumController.editAlbum)



router.post("/new", jwtCheck, albumController.newAlbum)



router.delete("/delete/:id", jwtCheck, albumController.deleteAlbum)



module.exports = router;