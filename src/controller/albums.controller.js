const Album = require("../models/albums.model");

const getAllAlbums = (req, res) => {
    const albums = Album.find({})

    albums.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ningun album"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .albums!"
        })
    })
}

const newAlbum = (req, res) => {
    try {
        // Recoger datos del body
        const params = req.body;
        // creamos el nuevo artista
        const new_album = new Album(params);
        // Guardamos el nuevo artista
        new_album.save((err, data) => {
            if (err) throw err;
            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El album ha sido creado"
            });
        });
    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "Hay un error al crear el album"
        });
    }
}

const editAlbum = (req, res) => {
    const id = req.params.id;
    const params = req.body;
    Album.findByIdAndUpdate(id, params, { new: true }, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "No se ha editado el album"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            response: true,
            mensaje: "El album se ha editado correctamente"
        })
    })
}

const deleteAlbum = (req, res) => {
    const albumId = req.params.id

    Album.findOneAndDelete({_id: albumId}, (error, data) => {
        if (error) {
            return res.status(400).json({
                status: "error",
                mensaje: "Error al borrar el album"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "El album se ha eliminado correctamente"
        })
    })
}

// Export
module.exports = {
    getAllAlbums,
    newAlbum,
    editAlbum,
    deleteAlbum
}