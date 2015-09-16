/**
 * Created by Polar Cape on 16-Sep-15.
 */
var bookshelf = require('../bookshelf');

bookshelf.knex.schema.hasTable('user').then(function(exists) {
    if(!exists) {
        bookshelf.knex.schema.createTable('user', function(user) {
            user.increments('id').primary();
            user.string('username');
            user.string('password');
            user.boolean('valid');
        }).then(function(table){
            console.log('Created Table:', table);
        });
    }

});

var User = bookshelf.Model.extend({
    tableName: 'user'
});

//authenticate user
exports.authenticateUser = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
  /*  console.log(username + " " + password);*/
    new User()
        .query('where', 'username', '=', username)
        .fetch()
        .then(function(user) {
         /*   res.send(user.toJSON());*/
            if(user){
                res.json({
                    type: true,
                    data: user,
                    token: user.token
                });
            }
            else{
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });
            }
        }).catch(function(error) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
            /*console.log(error);
            res.send('An error occured');*/
        });
};