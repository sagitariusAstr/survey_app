const UserModel = require("../model/user.model");
const Joi = require("joi");

class UserService{

    validateData = (data) => {
        try{
            let validateSchema = Joi.object({
                name: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
                password: Joi.string().required().min(8),
                    //.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
                email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
                role: Joi.string()
                    .valid("admin","teachers","class"),
                status: Joi.string()
                    .valid("active","inactive"),
                image: Joi.string(),
                
                    
            })
            let validation = validateSchema.validate(data);
            // console.log(validation);
            return validation;
        }catch(error){
            console.log("Validation: ", error);
            throw error;
        }
    }

    storeUser = async (data) => {
        try{
            
            const user = await UserModel.create(data);
            return user;
        }catch(error){
           throw error;
        }
    }


    getUserById = async (id) => {
        try{
            let response = await UserModel.findOne(
                {
                    where : {id : id}
                }
            )
            if(response){
                return response;
            }else{
                throw "user doesnt exist"
            }
        }catch(error){
            next({status:401,message:error})
        }
    }

    getUserByEmail = async (email) => {
        try{
            let response = await UserModel.findOne(
                {
                    where: {email:email}
                }
            )
            return response
        }catch(error){
           console.log("Error :",error)
        }
    }




}

module.exports = UserService;