const db = require('../../models')
// const  nanoid  = require('nanoid');
// const {nanoid } = require('nanoid')
const Users = db.Users
class userService {
    async getUser(req , res){
        console.log("requested data" , req)
        const id = req.id
        try{
            const user = await Users.findOne({
                where : {
                    userId: id
                }
            })
            console.log('userssss' , user)
            return user
        }catch(err){
            console.log('this is error')
        }
    }

    async createUser(req , res){
         console.log("requested data" , req)
         const { nanoid } = await import('nanoid');      //Using Dynamic Import in CommonJS
        const userId = nanoid();
        console.log(userId);
        const userName = req.userName
        const userAge = req.userAge
        try{
            const user = await Users.create({
                userId : userId,
                userName : userName,
                userAge : userAge
            })
            console.log('user' , user)
            return user
        }catch(err){
            console.log("error" , err)
        }
    }
}

const userservice = new userService()
module.exports  = userservice