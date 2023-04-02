const { Router } = require("express")
const multer = require('multer');

const { createCourse, get_users_courses, upload_file } = require("../controllers/admin.controllers")
const router = Router()

router.post("/create_course", createCourse)
router.get("/get_users_courses", get_users_courses)
router.post("/upload_file", upload_file)

module.exports = router