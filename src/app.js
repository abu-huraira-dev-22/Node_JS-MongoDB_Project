const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('../helperFunctions/db')
const authRouter = require('./Routes/authRoutes')

dotenv.config()

const app = express()

app.use(express.json())

connectDB()
app.get('/health',(req,res)=>{
    res.status(200).json({
        status:true,
        message: "Server is working fine"
    })
})


// Authentication Route

app.use('/api/auth',authRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server is working at  port number ${process.env.PORT}`)
})