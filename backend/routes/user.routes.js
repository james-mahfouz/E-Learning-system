const { Router } = require("express")
const { enroll, get_files } = require("../controllers/user.controllers")
const router = Router()

router.post("/enroll/:courseId", enroll)
router.get("/get_files", get_files)

module.exports = router