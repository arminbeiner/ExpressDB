/**
 * Created by Armin on 03.01.2018.
 */
'use strict'

let pool = require('../db_config')

let chai = require('chai');
let chaiHttp = require('chai-http')
let server = require('../index')
let should = chai.should()

chai.use(chaiHttp)

describe('/GET customers', () => {
    it('it should GET all the customers', (done) =>{
        chai.request(server)
            .get('/customers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.above(0);
            done();
            })
    })
})