const { Router } = require("express")
const multer = require('multer');

const { createCourse, get_users_courses, upload_file } = require("../controllers/admin.controllers")
const router = Router()

router.post("/create_course", createCourse)
router.get("/get_users_courses", get_users_courses)

const { fileMiddleware } = require("../middlewares/file.middleware");
router.post("/upload_file", fileMiddleware, upload_file)

module.exports = router