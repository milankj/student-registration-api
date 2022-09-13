const Sequelize = require('sequelize')

const sequelize = new Sequelize('exam', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})


module.exports = sequelize