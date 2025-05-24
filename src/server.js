const express = require('express')
require('dotenv').config()
const baseUrl = require('./routers/index.js')
const {dbconnect} = require('./dbConnection/connect.js')
const app = express()
// const port = process.env.PORT
const port = 5000
console.log("port" , port)
console.log('oooooooooo' , process.env.PORT)
app.use(express.json())
app.use(express.urlencoded({extended : true}))
dbconnect.connection()
app.use('/api' , baseUrl)
app.get('/api' , (req , res) =>{
    console.log('itsmeeeeeeeeeeeee')
    res.send({message : "this is has been send"})
})
app.listen(port , () => {
    console.log('server started!')
})  