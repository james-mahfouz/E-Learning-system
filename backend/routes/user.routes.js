const { Router } = require("express")
const { get_users, enroll } = require("../controllers/user.controllers")
const router = Router()

router.get("/enroll/:courseId", enroll)

module.exports = router