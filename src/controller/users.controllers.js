// Import 
const User = require("../models/users.model");

const checkUser = (req, res) => {
    const params = req.params;
    User.find({ email: params.email }, (error, data) => {
        if (error || !data) {
            return res.status(500).json({
                status: "error",
                mensaje: "Error al buscar"
            })
        }
        if (!!data.length) {
            console.log('El usuario existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "En la consola esta la lista pisha!!"
            })
        } else {
            console.log('El usuario no existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: false,
                mensaje: "Ese email no esta en la bbdd"
            })
        }
    })
}

const createUser = (req, res) => {
    try {
        // recogemos los params del body
        let params = req.body;

        // validamos datos (con la funcion que tenemos en la carpeta helper)

        // Creamos el objeto a guardar
        const $user = new User(params)

        // guardar el articulo en la ddbb
        $user.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "No se ha guardado el post"
                })
            }
            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El post ha sido guardado"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el post"
        })
    }
}

const editUser = (req, res) => {
    let idUser = req.params.id;
    let params = req.body;

    User.findByIdAndUpdate(idUser, params, { new: true }, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "No se ha editado el usuario"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            response: true,
            mensaje: "El usuario se ha editado correctamente"
        })
    })
}

const followUser = (req, res) => {
    const params = req.body;
    // Editamos usuario con el follow actualizado 
    User.findByIdAndUpdate(req.params.id, params.followers, { new: true }, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "No se ha encontrado el usuario al que editar los seguidos"
            })
        }
    });

    // Editar usuario que RECIVE el follow
    User.findById(params.follow.userId, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "No se ha encontrado el usuario al que seguir"
            })
        }

        const edited_user = {
            ...data._doc,
            followers: [...data._doc.followers, {
                idUser: params.followers._id,
                name: params.followers.userData.complete_name,
                thumbnail: params.followers.userData.profilePicture
            }]
        }

        User.findByIdAndUpdate(edited_user._id, edited_user, { new: true }, (error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    response: false,
                    mensaje: "No se ha seguido el usuario"
                })
            }
            return res.status(200).json({
                status: "success",
                info: data,
                response: true,
                mensaje: "El usuario se ha seguido correctamente"
            })
        })
    }
    )
}

const unFollow = (req, res) => {
    const body = req.body;
    
    console.log(body);

    User.findById(body.idLogged, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "Hay un error al buscar el usuario"
            })
        }
        User.findByIdAndUpdate(body.idLogged, {$set: { follows: data.follows.filter(e => e._id !== body.idArtist) }}, { new: true }, (error, data) => {
            console.log(data);
        });
    });

    User.findById(body.artistUserId, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "Hay un error al buscar el usuario"
            })
        }

        User.findByIdAndUpdate(data._id, {$set: { followers: data.followers.filter(e => e.idUser !== body.idLogged) }}, { new: true }, (error, data) => {
            return res.status(200).json({
                status: "success",
                info: data,
                response: true,
                mensaje: "El usuario se ha dejado de seguir correctamente"
            })
        });
    })
}



// Export
module.exports = {
    checkUser,
    createUser,
    editUser,
    followUser,
    unFollow
}
