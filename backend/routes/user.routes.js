const { Router } = require("express")
const { enroll, get_files, get_courses } = require("../controllers/user.controllers")
const router = Router()

router.post("/enroll/:courseId", enroll)
router.get("/get_files", get_files)
router.get("/get_courses", get_courses)

module.exports = router