const router = require('express').Router();
const AuthController = require("../controllers/auth.controller")

//import middlewares

const uploader = require("../middleware/uploader.middleware");
const loginCheck = require("../middleware/auth.middleware");
const { isAdmin,isAdminTeacher,isTeacher } = require("../middleware/rbac.middleware");


const auth_ctrl = new AuthController();

router.post("/register",loginCheck,isAdminTeacher,uploader.single('image'),auth_ctrl.RegisterProcess);
router.post("/login",auth_ctrl.LoginProcess);


module.exports = router;