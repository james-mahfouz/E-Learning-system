const { Router } = require("express")
const multer = require('multer');

const { createCourse, get_users_courses, upload_file, get_withdrawal, approve_withdrawal } = require("../controllers/admin.controllers")
const router = Router()

router.post("/create_course", createCourse)
router.get("/get_users_courses", get_users_courses)
router.get("/get_withdrawal", get_withdrawal)
router.post("/approve_withdrawal", approve_withdrawal)

const { fileMiddleware } = require("../middlewares/file.middleware");
router.post("/upload_file", fileMiddleware, upload_file)

module.exports = router