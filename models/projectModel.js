/**
 * Created by Polar Cape on 17-Sep-15.
 */
var bookshelf = require('../bookshelf');
var employeeModel = require('../models/employeeModel');
var effortModel = require('../models/effortModel');

var Employee = employeeModel.Employee;
var Effort = effortModel.Effort;

bookshelf.knex.schema.hasTable('project').then(function(exists) {
    if(!exists) {
        bookshelf.knex.schema.createTable('project', function(project) {
            project.increments('id').primary();
            project.string('name');
            project.text('description');
            project.date('from');
            project.date('to');
            project.boolean('completed');
            project.boolean('valid');
        }).then(function(table){
            console.log('Created Table:', table);
        });
    }

});

exports.Project = bookshelf.Model.extend({
    tableName: 'project',

    employees: function () {
        return this
            .belongsToMany(Employee).through(Effort);
    }
});

