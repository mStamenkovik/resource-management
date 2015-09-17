/**
 * Created by Polar Cape on 17-Sep-15.
 */
var bookshelf = require('../bookshelf');
var effortModel = require('../models/effortModel');

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

var Employee = bookshelf.Model.extend({
    tableName: 'employee',

    projects: function () {
        return this
            .belongsToMany(Project).through(Effort);
    }
});


var Project = bookshelf.Model.extend({
    tableName: 'project',

    employees: function () {
        return this
            .belongsToMany(Employee).through(Effort);
    }
});

module.exports = {
    Project: Project,
    Employee: Employee
};