import axiosInstance from "../../../config/axios.config";


class StudentLayoutService{
    SendResponse = async (data) => {
        try{
            console.log(data);
            let response = await axiosInstance.post("/response",data)
           
           return response;
            
        }catch(error){
            console.log(error);
        }
    }
}


const studentlayout_svc = new StudentLayoutService();

export default studentlayout_svc;