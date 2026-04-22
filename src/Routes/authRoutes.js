const express = require('express')
const {successResponse,errorResponse} = require('../../helperFunctions/responseHandler.js')
const Users = require('../../models/UserSchema.js')

const authRouter = express.Router()

// SignUp & Add User

authRouter.post('/signup',async(req,res)=>{

    const {userName,email,password} = req.body
    if(!userName || !email || !password){
        errorResponse(400,false,"All fields are required",res)
    }
    try {
        await Users.create({
            userName:userName,
            email:email,
            password:password
        })
        return successResponse(200,true,"User Signed up Successfully",[],res)
    } catch (error) {
        return errorResponse(400,false,error.message,res)
    }
})

// Login 

authRouter.post('/login',(req,res)=>{
    return successResponse(200,true,"User Login Successfully",[],res)
})

module.exports = authRouter