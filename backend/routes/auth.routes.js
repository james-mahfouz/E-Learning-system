const { Router } = require("express");
const router = Router();

const { register } = require("../controllers/auth.controllers")
// login,
// router.get("/login", login);
router.post("/register", register);

module.exports = router;