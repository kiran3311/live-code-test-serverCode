const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/live_test', ()=>{
    console.log('connected to db')
})


const app =express()

app.use(express.json())

app.listen(5000,()=>{
    console.log('server started')
})

app.post('/product',(req,res)=>{
    res.send(req.body)

})