import axios from "axios";
import axiosInstance from "../../config/axios.config";


class Fetch {
    fetchSchools = async () => {
        try{
            let response = await axiosInstance.get('/getschools',{
                headers:{
                    "authorization":localStorage.getItem("auth_token")
                }
            })
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    fetchClass = async (schoolname) => {
        try{
            let response = await axiosInstance.get(`/getclassbyschoolname/${schoolname}`,{
                headers:{
                    "authorization":localStorage.getItem("auth_token")
                }
            })
            if(response){
                return response
            }
        }catch(error){
            console.log("Error ",error)
        }
    }

    fetchStudents = async (classid) => {
        try{
            let response = await axiosInstance.get(`/getstudentsbyclassid/${classid}`,{
                headers:{
                    "authorization":localStorage.getItem("auth_token")
                }
            })
            if(response){
                return response
            }
        }catch(error){
            console.log("Error ",error)
        }
    }

    fetchStudent = async (studentid) => {
        try{
            let response = await axiosInstance.get(`/getstudentdetailid1/${studentid}`,{
                headers:{
                    "authorization":localStorage.getItem("auth_token")
                }
            })
            return response
        }catch(error){
            console.log("Error :",error)
        }
    }

    fetchScoreResponse = async (studentid) => {
        try{
            let response = await axiosInstance.get(`/getstudentdetailid2/${studentid}`,{
                headers:{
                    "authorization":localStorage.getItem("auth_token")
                }
            })

            return response

        }catch(error){
            console.log("Error :",error)
        }
    }


}

const fetch_svc = new Fetch()

export default fetch_svc;