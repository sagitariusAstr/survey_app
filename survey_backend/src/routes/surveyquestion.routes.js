const router = require('express').Router();

const SurveyQuestionController = require('../controllers/surveyquestion.controller');

const question_ctrl = new SurveyQuestionController;


router.post('/question2',question_ctrl.StoreQuestion2);
router.post('/extraquestion',question_ctrl.StoreExtraQuestions);
router.get('/fetchextraquestion',question_ctrl.GetExtraQuestions);
router.get('/fetchquestion2',question_ctrl.GetQuestions2);





module.exports = router;