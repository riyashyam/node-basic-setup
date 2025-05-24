const express = require('express')
const router = express.Router()
const userservice = require('../services/userService')
router.get('/getUser' , async(req , res) => {
    console.log('This is the req bady')
    const user = await userservice.getUser(req.body , res)
    res.send(user)
})
router.post('/createUser' , async(req , res) => {
    console.log('This is the req bady')
    const user = await userservice.createUser(req.body , res)
    res.send(user)
})

module.exports = router