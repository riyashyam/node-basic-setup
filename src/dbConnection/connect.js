const Sequelize = require('sequelize')
const config = require('./config')
const sequelize = new Sequelize(
   config.database,    
    config.username,
    config.password,
    {
    host : config.host,
    dialect : config.dialect
    }
)

class dbConnect {
    connection(){
 sequelize.authenticate()
 .then(() => {
    console.log('database connected')
 }).catch(err =>{
    console.log('unable to connect database')
 })
}
}

const dbconnect = new dbConnect

module.exports = {
    sequelize,
    dbconnect
}
