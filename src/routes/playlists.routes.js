// import
const express = require("express");
const router = express.Router();

const playlistController = require("../controller/playlists.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back PLAYLIST"
    })
});

router.get("/get", playlistController.getAllPlaylists)
// VALIDAR SI ESTA LOGEADO CON UN USUARIO?
router.post('/createplaylist', playlistController.createPlaylist)


module.exports = router;