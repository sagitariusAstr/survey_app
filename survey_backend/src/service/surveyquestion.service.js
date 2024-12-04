
const SurveyQuestionModel1 = require('../model/surveyquestion1.model');
const SurveyQuestionModel2 = require('../model/surveyquestion2.model');


class SurveyQuestionService {

    storeQuestion2 = async (data) => {
        try{
            const question = await SurveyQuestionModel2.create(data);
            return question
        }catch(error){
            throw error;
        }
    }
    storeExtraQuestions = async (data) => {
        try{
            const question = await SurveyQuestionModel1.create(data);
            return question
        }catch(error){
            throw error
        }
    }

    getExtraQuestions = async () => {
        try{
            const questions = await SurveyQuestionModel1.findAll();
            return questions
        }catch(error){
            throw error
        }
    }

    getQuestions2 = async () => {
        try{
            const questions = await SurveyQuestionModel2.findAll();
            return questions
        }catch(error){
            throw error
        }
    }
       
    
}

module.exports = SurveyQuestionService;