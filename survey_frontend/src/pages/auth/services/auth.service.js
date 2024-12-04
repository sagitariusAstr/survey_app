import axiosInstance from "../../../config/axios.config";


class AuthService {
    login = async (credential) => {
        try{
            //api trigger
            console.log(credential);
            let response = await axiosInstance.post("/login",credential);
            if(response.data.status){
                return response

            }else{
                throw {response:response}
            }
            
           
           
        }catch(err){
            throw err.response
        }
    }

    register = async (data) =>{
       
        try{
          
            let formData = new FormData();
            if(data.image){
                formData.append('image',data.image,data.filename)
                delete data.image
            }
            Object.keys(data).map((field) => {
                formData.append(field,data[field])
            })
            let response = await axiosInstance.post("/register",formData,{
                headers:{
                    "content-type":"multipart/form-data",
                    "authorization":"Bearer "+localStorage.getItem("auth_token")
                }
            });
            
            return response;
            
        }catch(err){
            console.log(err)
        }
    }

   
}

const auth_svc = new AuthService();

export default auth_svc;