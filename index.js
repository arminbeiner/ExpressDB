'use strict'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import DB from './app/db'

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const data = new DB()
const log = require('simple-node-logger').createSimpleFileLogger('./app/log/express.log')

let router = express.Router()

router.use(function(req, res, next){
	next()
})

router.route('/user/:name/:pass')
	.get(function (req, res, err){
		data.getUserfromDB(req.params, res)
        if(err) {
            log.error(err.message)
        }
        else {
            log.info('User has been requested')
		}
    })


router.route('/customers')
	.get(function (req, res, err){
		data.getCustomersfromDB(res)
		if(err) {
			log.error(err.message)
		}
		else {
			log.info('All Customers have been requested')
		}
	})

router.route('/policies')
	.get(function (req, res, err){
		data.getPoliciesfromDB(res)
		if(err) {
			log.error(err.message)
		}else {
			log.info('All Policies have been requested')
		}
	})

router.route('/customerswithpolicies')
	.get(function (req, res, err){
		data.getCustomerwithPoliciesfromDB(res)
		if(err) {
			log.error(err.message)
		}else {
			log.info('All Customers with associated Policies have been requested')
		}
	})

app.use('/', router)

app.use(function(err){
	log.error('Error while Request', err.stack, err.message)
	delete err.stack
})

app.listen(3000, function () {
	console.log('ExpressDB listening on port 3000!')
})

module.exports = app