const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require("./Routes/userRoutes")

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)

const port = process.env.PORT || 8000

app.listen(port, (req, res)=>{
    console.log(`Server running on port ${port}`)
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Mongo connected')
}).catch(err=>{
    console.log(err.message, '//error')
})