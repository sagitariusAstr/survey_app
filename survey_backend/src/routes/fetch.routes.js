const router = require('express').Router();
const FetchController = require('../controllers/fetch.controller')
const loginCheck = require("../middleware/auth.middleware");
const {isAdmin,isAdminTeacher} = require("../middleware/rbac.middleware");

const fetch_ctrl = new FetchController();


router.get("/getschools",loginCheck,isAdminTeacher,fetch_ctrl.fetchSchools);
router.get("/getliststudent",loginCheck,isAdminTeacher,fetch_ctrl.fetchStudentsByUniqueId);
router.get("/getlistclass",loginCheck,isAdminTeacher,fetch_ctrl.fetchClassByUniqueId);
router.get("/getclassbyschoolname/:schoolname",loginCheck,isAdminTeacher,fetch_ctrl.getListofClassBySchooName);
router.get("/getstudentsbyclassid/:classid",loginCheck,isAdminTeacher,fetch_ctrl.getListofStudentsByClassID);
router.get("/getstudentdetailid1/:studentid",fetch_ctrl.getStudentDetailRespons1);
router.get("/getstudentdetailid2/:studentid",fetch_ctrl.getStudentDetailRespons2);




module.exports = router
