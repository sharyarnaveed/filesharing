
const { Sequelize } = require('sequelize');

const sequelize=new Sequelize('filesharing','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false
})

module.exports={sequelize}