/**
 * Created by Polar Cape on 17-Sep-15.
 */
var bookshelf = require('../bookshelf');
var projectModel = require('../models/projectModel');
var effortModel = require('../models/effortModel');

var Project = projectModel.Project;
var Effort = effortModel.Effort;

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

exports.Employee = bookshelf.Model.extend({
    tableName: 'employee',

    projects: function () {
        return this
            .belongsToMany(Project).through(Effort);
    }
});