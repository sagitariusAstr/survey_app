const SurveyQuestionService = require('../service/surveyquestion.service');

class SurveyQuestionController {
    constructor(){
        this.question_svc = new SurveyQuestionService();
    }

    StoreQuestion2 = async (req,res,next) => {
        try{
            let data = req.body
            let result = await this.question_svc.storeQuestion2(data)
            res.json({
                data:result,
                status: true,
                msg:'question stored successfully'
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    StoreExtraQuestions = async (req,res,next) => {
        try{
            let data = req.body;
            let results = await this.question_svc.storeExtraQuestions(data);
            res.json({
                data:results,
                status:true,
                msg:'question stored successfully'
            })
        }catch(error){
            console.log("Error ",error)
            next({status:400,msg:error})
        }
    }

    GetExtraQuestions = async (req,res,next) => {
        try{
            let response = await this.question_svc.getExtraQuestions();
            res.json({
                data:response,
                msg:"Extra questions fetched successfully",
                status:true

            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,msg:error})
        }
    }

    GetQuestions2 = async (req,res,next) => {
        try{
            let response = await this.question_svc.getQuestions2();
            res.json({
                data:response,
                msg:" Questions 2 fetched successfully",
                status:true

            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,msg:error})
        }
    }
}

module.exports = SurveyQuestionController;