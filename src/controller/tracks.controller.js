// Import 
const Track = require("../models/tracks.model");

const getAllTracks = (req, res) => {
    const tracks = Track.find({})

    tracks.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna cancion"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .tracks!"
        })
    })
}

const newTrack = (req, res) => {
    try {
        // Recoger datos del body
        const params = req.body;
        // creamos el nuevo artista
        const new_track = new Track(params);
        // Guardamos el nuevo artista
        new_track.save((err, data) => {
            if (err) throw err;
            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "La cancion ha sido creada"
            });
        });
    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "Hay un error al crear la cancion"
        });
    }
}

const editTrack = (req, res) => {
    const id = req.params.id;
    const params = req.body;

    Track.findByIdAndUpdate(id, params, { new: true }, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                mensaje: "No se ha editado la cancion"
            });
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "La cancion se ha editado correctamente"
        });
    });
}

const deleteTrack = (req, res) => {
    const id = req.params.id;

    Track.findByIdAndDelete(id, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "No se ha borrado la cancion"
            });
        }
        return res.status(200).json({
            status: "success",
            info: data,
            response: true,
            mensaje: "La cancion se ha borrado correctamente"
        });
    });
}


// Export
module.exports = {
    getAllTracks,
    newTrack,
    editTrack,
    deleteTrack
}