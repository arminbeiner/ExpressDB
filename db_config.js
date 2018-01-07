'use strict'

let Pool = require('pg').Pool

let pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'semester3',
    max: 100,
    idleTimeoutMillis: 2000,
})

module.exports = pool
