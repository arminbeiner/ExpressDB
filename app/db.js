import { selectAllCustomers, selectAllPolicies, selectCustomerWithPolicies } from './queries'
import { errorHandlingResponse } from './errorhandler'

'use strict'

let db_connection = require('./pool-config')

const log = require('simple-node-logger').createSimpleFileLogger('./app/log/database.log')

export default class DB {

	getCustomersfromDB(response) {
		db_connection.query(selectAllCustomers, function (err, result) {
			errorHandlingResponse(response, result, err, log)
		})
	}

	getPoliciesfromDB(response) {
		db_connection.query(selectAllPolicies, function (err, result){
			errorHandlingResponse(response, result, err, log)
		})
	}

	getCustomerwithPoliciesfromDB(response) {
		db_connection.query(selectCustomerWithPolicies, function (err, result) {
			errorHandlingResponse(response, result, err, log)
		})
	}

}
