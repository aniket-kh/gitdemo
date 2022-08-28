const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midddleWare = require("../middleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",midddleWare.mid, userController.getUserData)

router.put("/users/:userId",midddleWare.mid, userController.updateUser)
router.delete("/users/:userId",midddleWare.mid, userController.deleteUser)

module.exports = router;