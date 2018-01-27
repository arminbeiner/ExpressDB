/* eslint-disable no-undef */
'use strict'

let chai  = require('chai')
let pool = require('../app/pool-config')
let should =  chai.should()
let queries = require('../app/queries')

describe('Check first id of customers table', () => {
	it('should equal 1', (done) => {
		pool.query(queries.selectAllCustomers, function (err, result) {
			should.not.exist(err)
			should.exist(result)
			result.rows[0].id.should.equal(1)
			done()
		})
	})
})

describe('Load all customers', () => {
	it('should return all customer entries from the database', (done) => {
		pool.query(queries.selectAllCustomers, function (err, result) {
			should.not.exist(err)
			should.exist(result)
			result.should.be.an('object')
			result.rows.length.should.be.above(0)
			done()
		})
	})
})

describe('Check first id of policies table', () => {
	it('should equal 1', (done) => {
		pool.query(queries.selectAllPolicies, function(err, result) {
			should.not.exist(err)
			should.exist(result)
			result.rows[0].id.should.equal(1)
			done()
		})
	})
})

describe('Load all policies', () => {
	it('should return all policy entries from the database', (done) => {
		pool.query(queries.selectAllPolicies, function (err, result) {
			should.not.exist(err)
			should.exist(result)
			result.should.be.an('object')
			result.rows.length.should.be.above(0)
			done()
		})
	})
})

describe('Load all customers with the associated policies', () => {
	it('should return all customers with the associated policies', (done) => {
		pool.query(queries.selectCustomerWithPolicies, function (err, result) {
			should.not.exist(err)
			should.exist(result)
			result.should.be.an('object')
			result.rows.length.should.be.above(0)
			done()
		})
	})
})
