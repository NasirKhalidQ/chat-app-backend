const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

const port = 8000

app.listen(port, (req, res)=>{
    console.log(`Server running on port ${port}`)
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Mongo connected')
}).catch(err=>{
    console.log(err.message, '//error')
})