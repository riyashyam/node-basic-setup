const express = require('express')
const router = express.Router()
const userRoute = require('./user.js')
console.log('jjjjjjjjjjjjjjjj')
router.use('/users' , userRoute)

module.exports = router