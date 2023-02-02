// import
const express = require("express");
const router = express.Router();

const userController = require("../controller/users.controllers");
const jwtCheck = require("../middlewares/jwtCheck.middleware");



router.get('/check/:email', userController.checkUser)

router.post('/new', jwtCheck, userController.createUser)

router
    .put('/edit/:id', jwtCheck, userController.editUser)
    .put('/follow/:id', jwtCheck, userController.followUser)
    .put('/unfollow', jwtCheck, userController.unFollow)




module.exports = router;