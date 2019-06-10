// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host:'localhost',
//     user: 'root',
//     database: 'node-shop',
//     password: 'pandemon'
// })

// module.exports = pool.promise()

const Sequelise = require('sequelize')

const sequelize = new Sequelise('node-shop', 'root', 'pandemon', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize