const ResponseService = require('../service/response.service');

class ResponseController {
    constructor(){
        this.response_svc = new ResponseService();
    }

    storeResponse2 = async (req,res,next) => {
       
        const {  user, responses } = req.body;
        
       
        try{
               const createdResponses = await this.response_svc.storeResponse2( {
                name: user.name,
                class_name:user.class,
                roll_no:user.roll_no,
                date_of_birth: user.date_of_birth,
                unique_classID:user.unique_classID,
                unique_studentID:user.unique_studentID,
                role:user.role,
                responses: responses
              });
            res.json({
                data:createdResponses,
                status:true,
                msg:"Response collected successfully"
            })
          
        }catch(error){
            console.log("Error :",error)
            next({status:400,msg:error})
        }
    }
    
    storeExtraResponse = async(req,res,next) => {
        const {user,responses} = req.body;
        
        try{
           
            const createdResponses = await this.response_svc.storeExtraResponse({
                name: user.name,
                class_name:user.class,
                roll_no:user.roll_no,
                date_of_birth: user.date_of_birth,
                unique_classID:user.unique_classID,
                unique_studentID:user.unique_studentID,
                school:user.school,
                role:user.role,
                responses: responses
              });
            res.json({
                data:createdResponses,
                status:true,
                msg:"Response collected successfully"
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,msg:error})
        }
    }

    getResponse2 = async(req,res,next) => {
        try{
            let result = await this.response_svc.getResponse2();
            res.json({
                result:result,
                status:true,
                message:"Data fetched successfully"
            })
        }catch(error){
            console.log("Error: ",error)
            next({status:400,msg:error})
        }
    }

    getResponse1 = async (req,res,next) => {
        try{
            let response = await this.response_svc.getResponse1();
            res.json({
                result:response,
                message:"Data fetched successfully",
                status:true,
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getResponse1ByClass = async (req,res,next) => {
        try{
            let uniqueclassid = req.body.unique_classID
           
            let response = await this.response_svc.getResponse1ByClass(uniqueclassid)
            res.json({
                result:response,
                message:"Data fetch by class successful",
                status:true,

            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,msg:error})
        }
    }

    getResponse1ByStudent = async (req,res,next) => {
        try{
            let uniquestudentid = req.body.unique_studentID
            let response = await this.response_svc.getResponse1ByStudent(uniquestudentid)
            res.json({
                result:response,
                message:"Data fetch by student successful",
                status:true
            })
        }catch(error){
            console.log("Error ",error)
            next({status:400,msg:error})
        }
    }

    getResponse2ByClass = async (req,res,next) => {
        try{
            let uniqueclassid = req.body.unique_classID
           
            let response = await this.response_svc.getResponse2ByClass(uniqueclassid)
            res.json({
                result:response,
                message:"Data fetch by class successful",
                status:true,

            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,msg:error})
        }
    }

    getResponse2ByStudent = async (req,res,next) => {
        try{
            let uniquestudentid = req.body.unique_studentID
            let response = await this.response_svc.getResponse2ByStudent(uniquestudentid)
            res.json({
                result:response,
                message:"Data fetch by student successful",
                status:true
            })
        }catch(error){
            console.log("Error ",error)
            next({status:400,msg:error})
        }
    }


    getResponse1BySchool = async (req,res,next) => {
        try{
            let schoolname = req.params.name;
            let response = await this.response_svc.getResponse1BySchool(schoolname);
            res.json({
                result:response,
                status:200,
                message:'Successfully fetched datas of specific school'
            })
        }catch(error){
            console.log("Error : ",error)
            next({status:400,message:error})
        }
    }

    getResponse1BySchoolUniqueClass = async (req,res,next) => {
        try{
            let schoolname = req.params.name;
            
            let response = await this.response_svc.getResponse1ByUniqueClass(schoolname);
            
            res.json({
                result:response,
                status:200,
                message:'Successfully fetched datas of specific school'
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }

    getResponse2BySchoolUniqueClass = async (req,res,next) => {
        try{
            let schoolname = req.params.name;
            let response = await this.response_svc.getResponse2ByClass(schoolname);
            res.json({
                result:response,
                status:200,
                message:'Successfully fetched datas of specific school'
            })
        }catch(error){
            console.log("Error :",error)
            next({status:400,message:error})
        }
    }


}


module.exports = ResponseController;