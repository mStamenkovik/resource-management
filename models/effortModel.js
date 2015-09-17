/**
 * Created by Polar Cape on 17-Sep-15.
 */
var bookshelf = require('../bookshelf');
var employeeModel = require('../models/employeeModel');

var Project = employeeModel.Project;
var Employee = employeeModel.Employee;

bookshelf.knex.schema.hasTable('effort').then(function(exists) {
    if(!exists) {
        bookshelf.knex.schema.createTable('effort', function(effort) {
            effort.increments('id').primary();
            effort.integer('employee_id');
                 //.references(Employee.tableName.id);
            effort.integer('project_id');
                //.references(Project.tableName.id);
        }).then(function(table){
            console.log('Created Table:', table);
        });
    }

});

exports.Effort = bookshelf.Model.extend({
    tableName: 'effort',

    projects: function () {
        return this
            .belongsToMany(Project);
    },

    employees: function () {
        return this
            .belongsToMany(Employee);
    }
});