const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019

const app = express();
app.use(express.static(__dirname))

mongoose.connect('userDB://127.0.0.1:27017/students')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Registration Form connection successful")
})

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
})

const Users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'))
})

app.post('/post',async (req,res)=>{
    
})

app.listen(port,()=>{
    console.log("Server started")
})