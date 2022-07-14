const router = require("express").Router();
const {getMe, getUsers, registerUser, loginUser}  = require("../../controllers/userController");
const protected = require("../../middleware/authMiddleware")

router.get("/", protected, getUsers);
router.get("/me", protected, getMe)
router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router;