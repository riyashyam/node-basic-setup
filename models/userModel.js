// const Sequelize = require('sequelize')
// const DataTypes = require('sequelize')
// const Users = Sequelize.define('Users'  , {
//     userId :{ 
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     userName : {
//          type : DataTypes.STRING,
//         allowNull : false
//     },
//     userAge : {
//          type : DataTypes.NUMBER,
//         allowNull : true
//     }
// }) 

// module.exports = Users


module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId: DataTypes.STRING,
    userName: DataTypes.STRING,
    userAge: DataTypes.INTEGER
  });
  return Users;
};