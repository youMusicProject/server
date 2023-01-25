// import
const express = require("express");
const router = express.Router();

const playlistController = require("../controller/playlists.controller")


router.get("/get", playlistController.getAllPlaylists)


router.post('/new', playlistController.createPlaylist)


module.exports = router;