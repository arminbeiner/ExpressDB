/* eslint-disable no-undef */
/**
 * Created by Armin on 03.01.2018.
 */

'use strict'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../index')
let should = chai.should()

chai.use(chaiHttp)

describe('/GET customers', () => {
	it('it should GET all the customers', (done) =>{
		chai.request(server)
			.get('/customers')
			.end((err, res) => {
				should.exist(res)
				should.not.exist(err)
				res.should.have.status(200)
				res.body.should.be.a('array')
				res.should.be.json
				res.body.length.should.be.above(0)
				done()
			})
	})
})

describe('/GET policies', () => {
	it('it should GET all the policies', (done) =>{
		chai.request(server)
			.get('/policies')
			.end((err, res) => {
				should.exist(res)
				should.not.exist(err)
				res.should.have.status(200)
				res.body.should.be.a('array')
				res.should.be.json
				res.body.length.should.be.above(0)
				done()
			})
	})
})

describe('/GET customerswithpolicies', () => {
	it('it should GET all the customers with all their policies', (done) =>{
		chai.request(server)
			.get('/customerswithpolicies')
			.end((err, res) => {
				should.exist(res)
				should.not.exist(err)
				res.should.have.status(200)
				res.body.should.be.a('array')
				res.should.be.json
				res.body.length.should.be.above(0)
				done()
			})
	})
})

describe('/GET user by name', () => {
    it('it should GET one user by a name', (done) =>{
        chai.request(server)
            .get('/user/Tony/w1')
            .end((err, res) => {
                should.exist(res)
                should.not.exist(err)
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.should.be.json
                res.body.length.should.be.equal(1)
                done()
            })
    })
})