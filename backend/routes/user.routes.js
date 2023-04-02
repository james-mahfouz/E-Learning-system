const { Router } = require("express")
const { get_users, enroll } = require("../controllers/user.controllers")
const router = Router()

router.post("/enroll/:courseId", enroll)

module.exports = router