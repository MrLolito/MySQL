const dotenv = require('dotenv').config()
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'lolog',
        password: '',
        database: 'ecommerce'
    }
})

module.exports = knex