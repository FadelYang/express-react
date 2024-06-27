const express = require("express");
const router = express.Router();
const registerContorller = require("../controllers/RegisterController");
const loginController = require("../controllers/LoginController");
const UserController = require("../controllers/UserController");
const { verifyToken } = require("../middlewares/auth");
const { validateUser } = require("../utils/validators/user");
const { validateRegister, validateLogin } = require("../utils/validators/auth");

router.post("/register", validateRegister, registerContorller.register);

router.post("/login", validateLogin, loginController.login);

router.get("/admin/users", verifyToken, UserController.findUsers);

router.post(
    "/admin/users",
    verifyToken,
    validateUser,
    UserController.createUser
);

router.get("/admin/users/:id", verifyToken, UserController.findUserById);

router.put(
    "/admin/users/:id",
    verifyToken,
    validateUser,
    UserController.updateUser
);

router.delete(
    "/admin/users/:id",
    verifyToken,
    validateUser,
    UserController.deleteUser
);

module.exports = router;
