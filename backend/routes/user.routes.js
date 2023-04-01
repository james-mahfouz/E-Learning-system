const { Router } = require("express")
const { get_users } = require("../controllers/user.controllers")
const router = Router()

router.get("/get_users", get_users)

module.exports = router