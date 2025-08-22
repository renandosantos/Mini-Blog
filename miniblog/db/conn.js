const { Sequelize } = require('sequelize')
const { senha } = require('../config')
const sequelize = new Sequelize ('miniblog', 'root', senha, {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00', 
    dialectOptions: {timezone: '-03:00'}
}) 

module.exports = sequelize