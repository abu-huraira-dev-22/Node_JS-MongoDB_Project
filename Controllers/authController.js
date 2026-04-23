const { successResponse, errorResponse } = require("../helperFunctions/responseHandler")
const Users = require("../models/UserSchema")

const signupController = async(req,res)=>{

    const {userName,email,password} = req.body
    if(!userName || !email || !password){
        errorResponse(400,false,"All fields are required",res)
    }

    if(password.length<8) return errorResponse(400,false,"Password should be minimum 8 characters long",res)

    try {
        const userRecord = new Users({
            userName:userName,
            email:email,
            password:password
        })
        await userRecord.save()

        return successResponse(200,true,"User Signed up Successfully",[],res)
    } catch (error) {
        return errorResponse(400,false,error.message,res)
    }
}

module.exports = signupController