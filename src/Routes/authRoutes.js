const express = require('express')
const {successResponse,errorResponse} = require('../../helperFunctions/responseHandler.js')
const Users = require('../../models/UserSchema.js')
const signupController = require('../../Controllers/authController.js')

const authRouter = express.Router()

// SignUp & Add User

authRouter.post('/signup',signupController)

// Login 

authRouter.post('/login',(req,res)=>{
    return successResponse(200,true,"User Login Successfully",[],res)
})

module.exports = authRouter