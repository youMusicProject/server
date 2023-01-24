const Playlist = require("../models/playlists.model");

const getAllPlaylists = (req, res) => {
    const playlists = Playlist.find({})

    playlists.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna playlist"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .playlists!"
        })
    })
}

const createPlaylist = (req, res) => {
    try {
        // recoger params del body
        let params = req.body

        // crea el objeto a guardar
        const $playlist = new Playlist(params)

        // guardar playlist en ddbb
        $playlist.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "No se ha guardado el post de Playlist"
                })
            }
            // retornar el post, todo OK
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El post de Playlist ha sido guardado"
            })
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el post de playlist"
        })
    }
}

// Export
module.exports = {
    getAllPlaylists,
    createPlaylist
}