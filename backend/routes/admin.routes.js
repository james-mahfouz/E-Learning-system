const { Router } = require("express")

const { createCourse } = require("../controllers/user.controllers")
const router = Router()

router.post("/", createCourse)

module.exports = router