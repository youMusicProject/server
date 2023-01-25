// import
const express = require("express");
const router = express.Router();

const playlistController = require("../controller/playlists.controller")
const jwtCheck = require("../middlewares/jwtCheck.middleware");

// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back PLAYLIST"
    })
});

router.get("/get", playlistController.getAllPlaylists)

router.post('/createplaylist', jwtCheck, playlistController.createPlaylist)

router.put('/edit/:id', jwtCheck, playlistController.editPlaylist)

router.delete("/delete/:id", jwtCheck, playlistController.deletePlaylist)


module.exports = router;