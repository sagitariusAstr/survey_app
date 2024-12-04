const UserModel = require('../model/user.model');
const ResponseModel1 = require("../model/surveyresponse1.model");
const ResponseModel2 = require("../model/surveyresponse2.model");
const SurveyQuestionModel1 = require("../model/surveyquestion1.model");
const SurveyQuestionModel2 = require("../model/surveyresponse2.model");
const Sequelize = require("sequelize");



class FetchDetails {
    getAllSchools = async () => {
        try{
            let response = await UserModel.findAll({
                where:{
                    role:'school'
                },
               
            })
            
            return response
        }catch(error){
            throw error
        }
    }

    getListofStudentsByID = async (uniquestudentid) => {
        try{
            
            // let response = await ResponseModel1.findAll({
            //     attributes: ['unique_studentID',[Sequelize.fn('DISTINCT', Sequelize.col('name')), 'name']],

            //     where:{
            //         unique_studentID: uniquestudentid
            //     }
            // })
            let response = await ResponseModel1.findAll({
                attributes: ['unique_studentID', 'name'],
                where: {
                    unique_studentID: uniquestudentid
                },
                group: ['unique_studentID', 'name']
            });
            
            return response
        }catch(error){
            throw error
        }
    }


    getListofClassByID = async (uniqueclassid) => {
        try{
            let response = await ResponseModel1.findAll({
                attributes:['unique_classID','class'],
                where:{
                    unique_classID : uniqueclassid
                },
                group:['unique_classID','class']
            });

            return response
        }catch(error){
            throw error
        }
    }


    getListofClassBySchooName = async (schoolname) => {
        try{
            let response = await ResponseModel1.findAll({
                attributes:['class'],
                where:{
                    school:schoolname
                },
                group:['class']
            });

            return response
        }catch(error){
            throw error
        }
    }


    getListofStudentsByClassID = async (classid) => {
        try{
            console.log(classid)
            let response = await ResponseModel1.findAll({
                attributes:['name','unique_studentID'],
                where:{
                    unique_classID : classid
                },
                group:['name','unique_studentID']
              

            })
           
            return response
        }catch(error){
            throw error
        }
    }


    getStudentDetailResponse1 =  async (studentid) => {
        try{
            let response = await ResponseModel1.findAll({
                include:[{
                    model:SurveyQuestionModel1,
                    as:'question'
                    
                }],
                where:{
                    unique_studentID : studentid
                }
            })

            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    // getStudentDetailResponse2 =  async (studentid) => {
    //     try{
    //         let response = await ResponseModel2.findAll(
    //             {
    //                 include:{
    //                     model:SurveyQuestionModel2,
                        
                        
    //                 }
    //                 }
    //         );

    //         if(response){
    //             return response
    //         }else{
    //             throw "Data doesn't exist"
    //         }
    //     }catch(error){
    //         throw error
    //     }
    // }



    
}


module.exports = FetchDetails