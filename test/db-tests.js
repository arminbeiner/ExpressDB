'use strict'

let chai  = require('chai')
let pool = require('../db_config')
let should =  chai.should()

describe('Check first id of customers table', () => {
    it('should equal 1', (done) => {
        pool.query('SELECT * from customer', function (err, result) {
            should.not.exist(err);
            should.exist(result);
            result.rows[0].id.should.equal(1);
            done()
        })
    })
})

describe('Load all customers', () => {
    it('should return all customer entries from the database', (done) => {
        pool.query('SELECT * from customer', function (err, result) {
            should.not.exist(err);
            should.exist(result);
            result.should.be.an('object');
            result.rows.length.should.be.above(0);
            done();
        })
    })
})

describe('Check first id of policies table', () => {
    it('should equal 1', (done) => {
        pool.query('SELECT * from policy', function(err, result) {
            should.not.exist(err);
            should.exist(result);
            result.rows[0].id.should.equal(1);
            done()
        })
    })
})

describe('Load all policies', () => {
    it('should return all policy entries from the database', (done) => {
        pool.query('SELECT * from policy', function (err, result) {
            should.not.exist(err);
            should.exist(result);
            result.should.be.an('object');
            result.rows.length.should.be.above(0);
            done();
        })
    })
})

describe('Load all customers with the associated policies', () => {
    it('should return all customers with the associated policies', (done) => {
        pool.query('SELECT c.lastname, c.firstname, c.street, c.housenumber, c.postcode, c.town, c.country, c.language, p.policynumber, p.startdate, p.enddate, p.premium, p.currency FROM customer c JOIN policy p ON (c.id = p.customerid)', function (err, result) {
            should.not.exist(err);
            should.exist(result);
            result.should.be.an('object');
            result.rows.length.should.be.above(0);
            done();
        })
    })
})
