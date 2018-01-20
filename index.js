'use strict'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import DB from './db'

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const data = new DB()
const log = require('simple-node-logger').createSimpleFileLogger('express.log')

let router = express.Router()

router.use(function(req, res, next){
	next()
})

router.route('/customers')

	.get(function (req, res){
		data.getCustomersfromDB(res)
		log.info('All Customers have been requested')
	})

router.route('/policies')
	.get(function (req, res){
		data.getPoliciesfromDB(res)
		log.info('All Policies have been requested')
	})

router.route('/customerswithpolicies')
	.get(function (req, res){
		data.getCustomerwithPoliciesfromDB(res)
		log.info('All Customers with associated Polcies have been requested')
	})

app.use('/', router)

app.use(function(err, req, res){
	log.error('Error while Request', err.stack, err.message)
	delete err.stack
	res.status(err.status || 500).json(err)
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

module.exports = app