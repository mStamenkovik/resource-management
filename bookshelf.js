/**
 * Created by Polar Cape on 15-Sep-15.
 */
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'chart_project',
        charset  : 'utf8'
    }
});

module.exports = require('bookshelf')(knex);
