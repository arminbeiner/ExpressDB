'use strict'


export let selectAllCustomers = 'SELECT * from customer';
export let selectAllPolicies = 'SELECT * from policy';
export let selectCustomerWithPolicies = 'SELECT c.lastname, c.firstname, c.street, c.housenumber, c.postcode, c.town, c.country, c.language, p.policynumber, p.startdate, p.enddate, p.premium, p.currency FROM customer c JOIN policy p ON (c.id = p.customerid)';