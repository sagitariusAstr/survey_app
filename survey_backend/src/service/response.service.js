const { Sequelize } = require('sequelize');


const ResponseModel1 = require("../model/surveyresponse1.model");
const ResponseModel2 = require("../model/surveyresponse2.model");

const SurveyQuestionModel2 = require("../model/surveyquestion2.model");
const SurveyQuestionModel1 = require("../model/surveyquestion1.model");

class ResponseService {
    

    storeExtraResponse = async (userData) => {
        try{
           
            const {name,class_name,roll_no,date_of_birth,unique_classID,unique_studentID,school,role,responses} = userData;
            const preparedResponses = responses.map(response => ({
                name:name,
                class:class_name,
                roll_no:roll_no,
                date_of_birth:date_of_birth,
                unique_classID:unique_classID,
                unique_studentID:unique_studentID,
                question_id:response.question_id,
                school:school,
                role:role,
                response:response.response
            }));
            const createdResponses = await ResponseModel1.bulkCreate(preparedResponses);
            return createdResponses;
        }catch(error){
            throw error
        }
    }

    storeResponse2 = async (userData) => {
        try{
            const {name,class_name,roll_no,date_of_birth,unique_classID,unique_studentID,role,responses} = userData;
           
            const preparedResponses = responses.map(response => ({
                name:name,
                class:class_name,
                roll_no:roll_no,
                date_of_birth:date_of_birth,
                unique_classID:unique_classID,
                unique_studentID:unique_studentID,
                question_id:response.question_id,
                role:role,
                response:response.response
            }));
            console.log(preparedResponses);
            const createdResponses = await ResponseModel2.bulkCreate(preparedResponses);
            return createdResponses;
        }catch(error){
            throw error
        }
    }


    getResponse2 = async () => {
        try{
            let response = await ResponseModel2.findAll(
                {
                    include:[{
                        model:SurveyQuestionModel2,
                        as:'question'
                        
                    }]
                    }
            );

            if(response){
                return response
            }else{
                throw "Data doesn't exist"
            }
        }catch(error){
            throw error
        }
    }

    getResponse2_detail = async (studentid) => {
        try{
            let response = await ResponseModel2.findAll(
                {
                    include:[{
                        model:SurveyQuestionModel2,
                        as:'question'
                        
                    }],
                    where:{
                        unique_studentID : studentid
                    }
                    }
            );

            console.log("Response :",response)

            if(response){
                return response
            }else{
                throw "Data doesn't exist"
            }
        }catch(error){
            throw error
        }
    }

    getResponse1 = async () => {
        try{
            let response = await ResponseModel1.findAll({
               include:[{
                model:SurveyQuestionModel1,
                as:'question'
               }] 
            });
            return response
            
        }catch(error){
            throw error
        }
    }

    getResponse1ByClass = async (uniqueclassid) => {
        try{
            let response = await ResponseModel1.findAll({
                where :{
                    unique_classID : uniqueclassid 
                }
            })
            return response
        }catch(error){
            throw error
        }
    }

    getResponse1ByStudent = async (uniquestudentid) => {
        try{
            let response = await ResponseModel1.findAll({
                where:{
                    unique_studentID : uniquestudentid
                }
            })
            return response
        }catch(error){
            throw error
        }
    }

    getResponse2ByClass = async (uniqueclassid) => {
        try{
            let response = await ResponseModel2.findAll({
                where :{
                    unique_classID : uniqueclassid 
                }
            })
            return response
        }catch(error){
            throw error
        }
    }

    getResponse2ByStudent = async (uniquestudentid) => {
        try{
            let response = await ResponseModel2.findAll({
                where:{
                    unique_studentID : uniquestudentid
                }
            })
            return response
        }catch(error){
            throw error
        }
    }

    getResponse1BySchool = async (schoolname) => {
        try{
            let  response = await ResponseModel1.findAll({
                attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('unique_studentID')), 'unique_studentID']],
                where: { school: schoolname }
            });

            return response
        }catch(error){
            throw error
        }
    }

    getResponse2BySchool = async (schoolname) => {
        try{
            let  response = await ResponseModel2.findAll({
                attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('unique_studentID')), 'unique_studentID']],
                where: { school: schoolname }
            });

            return response
        }catch(error){
            throw error
        }
    }


    getResponse1ByUniqueClass = async (schoolname) => {
        try{
           
            let response = await ResponseModel1.findAll({
                attributes:[[Sequelize.fn('DISTINCT',Sequelize.col('unique_classID')),'unique_classID']],
                where:{school : schoolname}
            });

            return response

           
        }catch(error){
            throw error
        }
    }

    getResponse2ByUniqueClass = async (schoolname) => {
        try{
            let response = await ResponseModel2.findAll({
                attributes:[[Sequelize.fn('DISTINCT',Sequelize.col('unique_classID')),'unique_classID']],
                where:{school : schoolname}
            });

            return response
        }catch(error){
            throw error
        }
    }



}

module.exports = ResponseService;