const express = require("express")
const { registerUser, authUser, tasks, getData, UpdateData } = require("../Controller/UserController")

const router = express.Router()


router.post("/",registerUser)
router.post("/login",authUser)
router.post("/add", tasks)
router.get("/get", getData)
router.put("/update/:id", UpdateData)


module.exports = router