var bcrypt = require('password-hash');
const UserService = require('../service/user.service');
const jwt = require("jsonwebtoken");
const Config = require("../../config/constants.js");
const UserModel = require('../model/user.model');

class AuthController {
    constructor(){
        this.user_svc = new UserService();
    }


    RegisterProcess = async (req,res,next) => {
        try{
            let data = req.body;
            console.log(data)
            if(req.file){
                data.image = req.file.filename;
            }
            let validation = this.user_svc.validateData(data);
            data.password = bcrypt.generate(data.password);
            // data.created_by = req.auth_user.name;
            let user = await this.user_svc.storeUser(data);
            res.json({
                result:data,
                status:data,
                message:"user successfully added"
            })
        }catch(error){
            next({status:400,message:error})
        }
    }

    LoginProcess = async (req,res,next) => {
        try{
            let data = req.body;
                console.log(data);
                console.log(data.password)
            let user = await this.user_svc.getUserByEmail(data.email);
            console.log(user)
            if(!bcrypt.verify(data.password,user.password)){
                throw "Credentials do not match"
            }else{
                let token = jwt.sign({id: user.id, name: user.name},Config.JWT_SECRET);
                res.json({
                    result : {
                        user:{
                            id : user.id,
                            name: user.name,
                            image: user.image,
                            role: user.role,
                            status: user.status
                        },
                        auth_token : token
                    },
                    status : true,
                    msg: "User Logged In"
                })
            }
        }catch(error){
            next({status:400,msg:error})
        }
    }
}

module.exports = AuthController