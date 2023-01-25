// import
const express = require("express");
const router = express.Router();

const playlistController = require("../controller/playlists.controller")
const jwtCheck = require("../middlewares/jwtCheck.middleware");


router.get("/get", playlistController.getAllPlaylists)

router.post('/new', jwtCheck, playlistController.createPlaylist)

router.put('/edit/:id', jwtCheck, playlistController.editPlaylist)

router.delete("/delete/:id", jwtCheck, playlistController.deletePlaylist)


module.exports = router;