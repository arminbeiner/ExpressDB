'use strict'

export let selectUserByName = 'SELECT * from users WHERE name = $1::text AND pass = $2::text';
export let selectAllCustomers = 'SELECT * from customer';
export let selectAllPolicies = "SELECT id, policynumber, to_char(startdate, 'YYYY-MM-DD') as startdate, to_char(enddate, 'YYYY-MM-DD') as enddate, premium, currency from policy";
export let selectCustomerWithPolicies = "SELECT c.lastname, c.firstname, c.street, c.housenumber, c.postcode, c.town, c.country, c.language, p.policynumber, to_char(p.startdate, 'YYYY-MM-DD') as startdate, to_char(p.enddate, 'YYYY-MM-DD') as enddate, p.premium, p.currency FROM customer c JOIN policy p ON (c.id = p.customerid)";