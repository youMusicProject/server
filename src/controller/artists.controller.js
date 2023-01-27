const Artist = require("../models/artists.model");
const User = require('../models/users.model')

const getAllArtists = (req, res) => {
    const artists = Artist.find({})

    artists.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna cancion"
            });
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .tracks!"
        });
    });
}

const userToArtist = (req, res) => {
    try {
        // Recoger datos del body
        const params = req.body;
        // creamos el nuevo artista
        const new_artist = new Artist(params);
        try {
            // Guardamos el nuevo artista
            new_artist.save();
            User.findByIdAndUpdate(params.userId, { $set: { role: "artist" } }, { new: true }, (error, data) => {
                if (error || !data) {
                    return res.status(404).json({
                        status: "error",
                        mensaje: "Hay un error, o no se ha encontrado ninguna cancion"
                    });
                }
                return res.status(200).json({
                    status: "success",
                    user: data,
                    artist: new_artist,
                    mensaje: "El usuario se ha editado correctamente!"
                });
            })
        } catch (error) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error al crear el artista"
            });
        }
    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "Hay un error al crear el artista"
        });
    }
}



// Export
module.exports = {
    getAllArtists,
    userToArtist
}