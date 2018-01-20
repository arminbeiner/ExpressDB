import { selectAllCustomers, selectAllPolicies, selectCustomerWithPolicies } from './queries'

'use strict'

let pool = require('./db_config')

const log = require('simple-node-logger').createSimpleFileLogger('database.log')

export default class DB {

	getCustomersfromDB(response) {
		pool.query(selectAllCustomers, function (err, result) {
			if(err) {
				log.error('Error while getting customers',  err.stackTrace(), err.message)
			}
			response.json(result.rows)
			log.info('Loaded customers from database')
		})
	}

	getPoliciesfromDB(response) {
		pool.query(selectAllPolicies, function (err, result){
			if(err) {
				log.error('Error while getting policies',  err.stackTrace(), err.message)
			}
			response.json(result.rows)
			log.info('Loaded policies from database')
		})
	}

	getCustomerwithPoliciesfromDB(response) {
		pool.query(selectCustomerWithPolicies, function (err, result) {
			if(err) {
				log.error('Error while getting customers with policies',  err.stackTrace(), err.message)
			}
			response.json(result.rows)
			log.info('Loaded customers with associated policies from database')
		})
	}
}
