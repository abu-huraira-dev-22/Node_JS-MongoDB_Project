const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    userName:{
        required:true,
        unique: true,
        type: String
    },
    email:{
        required:true,
        unique: true,
        type: String
    },
    password:{
        required:true,
        type: String,
        minLength: 8
    }
})

const Users = mongoose.model("Users",UserSchema)

module.exports = Users