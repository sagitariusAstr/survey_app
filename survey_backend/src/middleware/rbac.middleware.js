const isAdmin = async (req,res,next) => {
    try{
        if(req.auth_user.role === "admin"){
            next();
        }
    }catch(error){
        next({status:401,message:"You are not authorized to access this functionality"})
    }
}


const isTeacher = (req,res,next) => {
    if(req.auth_user.role === 'teachers'){
        next();
    }else{
        next({
            status:403,
            msg:"you are not authorized to access this functionality"
        })
    }
}

const isAdminTeacher = (req,res,next) => {
    if(req.auth_user.role === 'teachers' || req.auth_user.role === 'admin' ){
        next();
    }else{
        next({
            status: 403,
            msg:"you are not authorized to access"
        })
    }
}



module.exports = {
    isAdmin,
    isAdminTeacher,
    isTeacher
}