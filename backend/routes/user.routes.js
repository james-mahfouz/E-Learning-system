const { Router } = require("express")
const { enroll, get_files, get_courses, get_enrolled_courses, addWithdrawalForm } = require("../controllers/user.controllers")
const router = Router()

router.post("/enroll/:courseId", enroll)
router.get("/get_files", get_files)
router.get("/get_courses", get_courses)
router.get("/get_enrolled_courses", get_enrolled_courses)
router.post("/addWithdrawalForm/:courseId", addWithdrawalForm)


module.exports = router