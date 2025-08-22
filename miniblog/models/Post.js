const { DataTypes } = require('sequelize')
const conn = require('../db/conn')
const Post = conn.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

})

module.exports = Post