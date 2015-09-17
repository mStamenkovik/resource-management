/**
 * Created by Polar Cape on 16-Sep-15.
 */
var bookshelf = require('../bookshelf');

var userModel = require('../models/userModel');
var User = userModel.User;

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