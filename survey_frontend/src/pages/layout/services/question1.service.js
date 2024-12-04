import axiosInstance from "../../../config/axios.config";


class Question1Service{
    getQuestions = async () => {
        try{
            let response = await axiosInstance.get("/fetchextraquestion");

            return response
        }catch(error){
            console.log("Error:",error)
        }
    }

    storeResponse = async (data) => {
        try{
            let response = await axiosInstance.post("/extraresponse",data)
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }
}

class Question2Service{
    getQuestions = async () => {
        try{
            let response = await axiosInstance.get("/fetchquestion2")
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    storeResponse = async (data) => {
        try{
            let response = await axiosInstance.post("/response2",data)
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }
}


const question1_svc = new Question1Service();
const question2_svc = new Question2Service();

export {question1_svc,question2_svc};




