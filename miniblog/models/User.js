const { DataTypes } = require('sequelize')
const conn = ('../db/conn')
const User = conn.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

})

module.exports = User