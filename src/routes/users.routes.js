// import
const express = require("express");
const router = express.Router();

const userController = require("../controller/users.controllers")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back USERS"
    })
});

router.get('/check/:email', userController.checkUser)

router.post('/new', userController.createUser)

router.put('/edit/:id', userController.editUser)




module.exports = router;