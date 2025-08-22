const User = require('User')
const { DataTypes } = require('sequelize')
const conn = ('../db/conn')
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

Post.belongsTo(User)
module.exports = Post