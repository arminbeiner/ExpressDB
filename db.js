/**
 * Created by Armin on 06.12.2017.
 */

'use strict'

let pool = require('./db_config')

export default class DB {

    getCustomersfromDB(response) {
        pool.query('SELECT * from customer', function (err, result) {
            response.json(result.rows);
        });
    }

    getPoliciesfromDB(response) {
        pool.query('SELECT * from policy', function (err, result){
            response.json(result.rows);
        })
    }

    getCustomerwithPoliciesfromDB(response) {
        pool.query('SELECT c.lastname, c.firstname, c.street, c.housenumber, c.postcode, c.town, c.country, c.language, p.policynumber, p.startdate, p.enddate, p.premium, p.currency FROM customer c JOIN policy p ON (c.id = p.customerid)', function (err, result) {
            response.json(result.rows);
        })
    }
}