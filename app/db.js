import { selectAllCustomers, selectAllPolicies, selectCustomerWithPolicies } from './queries'
import { errorHandlingResponse } from './errorhandler'

'use strict'

let pool = require('./pool-config')

const log = require('simple-node-logger').createSimpleFileLogger('./app/log/database.log')

export default class DB {

	getCustomersfromDB(response) {
		pool.query(selectAllCustomers, function (err, result) {
			errorHandlingResponse(response, result, err, log)
		})
	}

	getPoliciesfromDB(response) {
		pool.query(selectAllPolicies, function (err, result){
			errorHandlingResponse(response, result, err, log)
		})
	}

	getCustomerwithPoliciesfromDB(response) {
		pool.query(selectCustomerWithPolicies, function (err, result) {
			errorHandlingResponse(response, result, err, log)
		})
	}

}
