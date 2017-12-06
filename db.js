/**
 * Created by Armin on 06.12.2017.
 */
/**
 * Created by Armin on 06.12.2017.
 */

let pool = require('./db_config')

export default class DB {

    getCustomersfromDB(response) {

        pool.query('SELECT * from customer', function (err, result) {
            response.json(result.rows);
        });
    }
}