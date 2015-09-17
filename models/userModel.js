/**
 * Created by Polar Cape on 17-Sep-15.
 */
var bookshelf = require('../bookshelf');

bookshelf.knex.schema.hasTable('user').then(function(exists) {
    if(!exists) {
        bookshelf.knex.schema.createTable('user', function(user) {
            user.increments('id').primary();
            user.string('username');
            user.string('password');
            user.string('role');
            user.boolean('valid');
        }).then(function(table){
            console.log('Created Table:', table);
        });
    }

});

exports.User = bookshelf.Model.extend({
    tableName: 'user'
});