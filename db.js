'use strict'

let pool = require('./db_config')

const log = require('simple-node-logger').createSimpleFileLogger('database.log')

export default class DB {

    getCustomersfromDB(response) {
        pool.query('SELECT * from customer', function (err, result) {
            if(err) {
                log.error('Error while getting customers',  err.stackTrace(), err.message)
            }
            response.json(result.rows);
            log.info('Loaded customers from database')
        });
    }

    getPoliciesfromDB(response) {
        pool.query('SELECT * from policy', function (err, result){
            if(err) {
                log.error('Error while getting policies',  err.stackTrace(), err.message)
            }
            response.json(result.rows);
            log.info('Loaded policies from database')
        })
    }

    getCustomerwithPoliciesfromDB(response) {
        pool.query('SELECT c.lastname, c.firstname, c.street, c.housenumber, c.postcode, c.town, c.country, c.language, p.policynumber, p.startdate, p.enddate, p.premium, p.currency FROM customer c JOIN policy p ON (c.id = p.customerid)', function (err, result) {
            if(err) {
                log.error('Error while getting customers with policies',  err.stackTrace(), err.message)
            }
            response.json(result.rows);
            log.info('Loaded customers with associated policies from database')
        })
    }
}