const { Router } = require("express")

const { createCourse, get_users_courses } = require("../controllers/admin.controllers")
const router = Router()

router.post("/create_course", createCourse)
router.get("/get_users_courses", get_users_courses)

module.exports = router