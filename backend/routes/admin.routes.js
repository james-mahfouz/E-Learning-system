const { Router } = require("express")

const { createCourse } = require("../controllers/admin.controllers")
const router = Router()

router.post("/create_course", createCourse)

module.exports = router