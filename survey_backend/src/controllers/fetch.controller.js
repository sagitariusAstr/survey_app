const FetchDetails = require('../service/fetch.service');
const ResponseService = require('../service/response.service')


class FetchController {
    constructor(){
        this.fetch_svc = new FetchDetails();
        this.response_svc = new ResponseService();
    }
    fetchSchools = async (req,res,next) => {
        
        try{
            let response = await this.fetch_svc.getAllSchools();
            res.json({
                result:response,
                status:true,
                message:'All School details fetched successfully'
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }

    fetchStudentsByUniqueId = async (req,res,next) => {
        try{
            let uniqueidArray = await  req.query.uniqueStudentIDs || [];

            
            let uniqueStudentIDs = uniqueidArray.map(item => item.unique_studentID);
            
            let response = await this.fetch_svc.getListofStudentsByID(uniqueStudentIDs)
            res.json({
                result:response,
                status:200,
                message:'Successfully fetched data'
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }

    fetchClassByUniqueId = async (req,res,next) => {
        try{
            let uniqueidArray =   req.body;

            
            let uniqueClassIDs = uniqueidArray.map(item => item.unique_classID);
            
            let response = await this.fetch_svc.getListofClassByID(uniqueClassIDs);
            res.json({
                result:response,
                status:200,
                message:'Successfully fetched data'
            })
        }catch(error){
            console.log("Error :", error)
            next({status:400,message:error})
        }
    }

    getListofClassBySchooName = async (req,res,next) => {
        try{
            let schoolname = req.params.schoolname
            let response = await this.fetch_svc.getListofClassBySchooName(schoolname);
            res.json({
                result:response,
                status:200,
                message:'Successfully fetched data'
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }


    getListofStudentsByClassID = async (req,res,next) => {
        try{
            let uniqueclassid =  req.params.classid
           
            let response = await this.fetch_svc.getListofStudentsByClassID(uniqueclassid)
            res.json({
                result: response,
                message:"Data fetched successfully",
                status:200
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }

    getStudentDetailRespons1 = async (req,res,next) => {

        const response_mapping_1 = {
            "No":0,
            "Yes - minor difficulties": 1,
            "Yes - definite difficulties" : 2,
            "Yes - severe difficulties" : 3
        }

        const response_mapping_2 = {
            "Not at all":0,
            "A medium amount":1,
            "A little":0,
            "A great deal":2
        }
        
        try{
            let uniquestudentid = req.params.studentid
            let response = await this.fetch_svc.getStudentDetailResponse1(uniquestudentid)
            response && response.map((index) => {
                
                if(index.question_id == 1 || index.question_id == 6){
                   const new_response = response_mapping_1[index.response]
                   
                   index.response = new_response
                }
                else{
                    const new_response = response_mapping_2[index.response]
                   
                    index.response = new_response
                }
            })
            res.json({
                result:response,
                message:"Data fetched successfully",
                status:200
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }

    getStudentDetailRespons2 = async (req,res,next) => {

        const response_mapping_3 = {
            "Not True" : 0,
            "Somewhat True" : 1,
            "Certainly True":2
        }

        const response_mapping_4 = {
            "Not True" : 2,
            "Somewhat True" : 1,
            "Certainly True":0
        }
        
        try{
            let uniquestudentid = req.params.studentid
            
            let response = await this.response_svc.getResponse2_detail(uniquestudentid)
            
            response && response.map((index) => {
                if(index.question_id == 7 || index.question_id == 11 ||index.question_id == 14 || index.question_id == 21 || index.question_id == 25 ){
                    index.response = response_mapping_4[index.response]
                }else{
                    index.response = response_mapping_3[index.response]
                }
            })
           
            res.json({
                result:response,
                message:"Data fetched successfully",
                status:200
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }

    

   
}


module.exports = FetchController;