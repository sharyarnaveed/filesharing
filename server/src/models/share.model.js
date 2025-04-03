const {DataTypes}=require('sequelize')

const {sequelize}=require('../database/conn.js')

const share=sequelize.define('share',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
        
    },
    genartedcode:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true
    },
    filepath:{
        type:DataTypes.STRING(255),
        allowNull:false
    }
},{
    timestamps:true
})


module.exports=share