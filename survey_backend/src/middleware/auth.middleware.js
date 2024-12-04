const jwt = require("jsonwebtoken");
const Config = require("../../config/constants");
const UserService = require("../service/user.service");


const loginCheck = async (req,res,next) => {
    try{
        let token = null;
        if(req.headers['authorization']){
            token = req.headers['authorization']
        }
        if(token === null){
            next({status:401,message:"User is not logged in"})
        }else{
            let part = token.split(" ");
            token = part.pop();
            if(!token){
                next({status:401,message:"JWT Auth token is not available"})
            }else{
                let data = jwt.verify(token,Config.JWT_SECRET);
                
                let user_svc = new UserService();
                let user = await user_svc.getUserById(data.id);
                req.auth_user = user;
               
                next();
            }
        }
    }catch(error){
        next({status:401,message:error})
    }
}


module.exports = loginCheck;