const express = require('express')
const successResponse = require('../../helperFunctions/responseHandler.js')

const authRouter = express.Router()

// SignUp & Add User

authRouter.post('/signup',(req,res)=>{
    return successResponse(200,true,"User Signed up Successfully",[],res)
})

// Login 

authRouter.post('/login',(req,res)=>{
    return successResponse(200,true,"User Login Successfully",[],res)
})

module.exports = authRouter