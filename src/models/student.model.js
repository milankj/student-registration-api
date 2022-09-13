const Sequelize = require('sequelize')
const sequelize = require('../../db')

const Student = sequelize.define('Student',{
    studentId : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true
    },
    name :{
        type : Sequelize.STRING,
        allowNull : false
    },
    maths:{
        type : Sequelize.FLOAT,
        allowNull : false
    },
    physics:{
        type : Sequelize.FLOAT,
        allowNull : false
    },
    chemistry:{
        type : Sequelize.FLOAT,
        allowNull : false
    },
    english:{
        type : Sequelize.FLOAT,
        allowNull : false
    },
    computer :{
        type : Sequelize.FLOAT,
        allowNull : false
    }
})

module.exports  = Student