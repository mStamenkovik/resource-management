/**
 * Created by Polar Cape on 10-Sep-15.
 */
var bookshelf = require('../bookshelf');

bookshelf.knex.schema.hasTable('employee').then(function(exists) {
    if(!exists) {
        bookshelf.knex.schema.createTable('employee', function(employee) {
            employee.increments('id').primary();
            employee.string('name');
            employee.string('last_name');
            employee.boolean('valid');
        }).then(function(table){
            console.log('Created Table:', table);
        });
    }

});

var Employee = bookshelf.Model.extend({
    tableName: 'employee'
});

// GET
exports.employees = function (req, res) {
    new Employee()
        .query('where', 'valid', '=', '1')
        .fetchAll()
        .then(function(employees) {
            res.send(employees.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });

};

exports.employee = function (req, res) {
    var id = req.params.id;
    new Employee()
        .query('where', 'id', '=', id)
        .fetchAll()
        .then(function(employee) {
            res.send(employee.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};

// POST
exports.addEmployee = function (req, res) {
    var name = req.body.name;
    var last_name = req.body.last_name;
    new Employee()
        .save({
            name: name,
            last_name: last_name,
            valid: '1'
        })
        .then(function(employee) {
            res.send(employee.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};


// PUT
exports.updateEmployee = function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var last_name = req.body.last_name;
    new Employee()
        .query('where', 'id', '=', id)
        .fetch()
        .then(function(employee) {
            employee
                .save({
                    name: name,
                    last_name: last_name,
                })
                .then(function(employee) {
                    res.send(employee.toJSON());
                }).catch(function(error) {
                    console.log(error);
                    res.send('An error occured');
                });
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};


// DELETE
exports.deleteEmployee = function (req, res) {
    var id = req.params.id;
    new Employee()
        .query('where', 'id', '=', id)
        .fetch()
        .then(function(employee) {
            employee
                .save({
                    valid: '0'
                })
                .then(function(employee) {
                    res.send(employee.toJSON());
                }).catch(function(error) {
                    console.log(error);
                    res.send('An error occured');
                });
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });

};