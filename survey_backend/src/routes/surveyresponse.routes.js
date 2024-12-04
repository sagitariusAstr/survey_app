const router = require('express').Router();

const loginCheck = require("../middleware/auth.middleware");
const {isAdmin,isAdminTeacher} = require("../middleware/rbac.middleware");

const SurveyResponseController = require('../controllers/response.controller');

const response_ctrl =  new SurveyResponseController;

router.post('/response2',response_ctrl.storeResponse2);
router.post('/extraresponse',response_ctrl.storeExtraResponse);
router.get('/getresponse2',response_ctrl.getResponse2);
router.get('/getresponse1',response_ctrl.getResponse1);
router.get('/response1byclass',loginCheck,isAdminTeacher,response_ctrl.getResponse1ByClass);
router.get('/response1bystudent',loginCheck,isAdminTeacher,response_ctrl.getResponse1ByStudent);
router.get('/response2bystudent',loginCheck,isAdminTeacher,response_ctrl.getResponse2ByStudent);
router.get('/schooldetail/:name',loginCheck,isAdminTeacher,response_ctrl.getResponse1BySchool);
router.get('/schooldetailByClass/:name',loginCheck,isAdminTeacher,response_ctrl.getResponse1BySchoolUniqueClass);


module.exports = router;

