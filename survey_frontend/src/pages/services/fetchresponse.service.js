import axios from "axios";
import axiosInstance from "../../config/axios.config";


class FetchResponse {
    getResponse2Data = async () => {
        try{
            let response = await axiosInstance.get("/getresponse2")
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    getResponse1Data = async () => {
        try{
            let response = await axiosInstance.get("/getresponse1")
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    getResponse1Students = async (name) => {
        try{
            let response = await axiosInstance.get(`/schooldetail/${name}`)
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    getListofStudents = async (list) => {
        try{
            
            const response = await axiosInstance.get('/getliststudent', {
                params: { uniqueStudentIDs: list }
            });

            if(response){
                return response
            }
            
        
            
            
        }catch(error){
            console.log("Error :",error)
        }
    }
}

const fetchresponse_svc = new FetchResponse();

export default fetchresponse_svc;