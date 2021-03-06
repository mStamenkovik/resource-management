/**
 * Created by Polar Cape on 11-Sep-15.
 */
var bookshelf = require('../bookshelf');
var employeeModel = require('../models/employeeModel');
var Project = employeeModel.Project;

// GET
exports.projects = function (req, res) {
    new Project()
        .query('where', 'valid', '=', '1')
        .fetchAll({withRelated: ['employees']})
        .then(function(projects) {
            res.send(projects.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};

//GET BY ID
exports.project = function (req, res) {
    var id = req.params.id;
    new Project()
        .query('where', 'id', '=', id)
        .fetchAll({withRelated: ['employees']})
        .then(function(project) {
            res.send(project.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};

//GET BY COMPLETITION
exports.getByCompletition = function(req, res){
    var completition = req.params.type;
    new Project()
        .query('where', 'completed', '=', completition)
        .fetchAll({withRelated: ['employees']})
        .then(function(project) {
            res.send(project.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};

//POST
exports.addProject = function(req, res){
    var name = req.body.name;
    var desc = req.body.description;
    var from = req.body.from;
    var to = req.body.to;
    new Project()
        .save({
            name: name,
            description: desc,
            from: from,
            to: to,
            completed: '0',
            valid: '1'
        })
        .then(function(project) {
            res.send(project.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};

//PUT
exports.updateProject = function(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var desc = req.body.description;
    var from = req.body.from;
    var to = req.body.to;
    new Project()
        .query('where', 'id', '=', id)
        .fetch()
        .then(function(project) {
            project
                .save({
                    name: name,
                    description: desc,
                    from: from,
                    to: to,
                    valid: '1'
                })
                .then(function(project) {
                    res.send(project.toJSON());
                }).catch(function(error) {
                    console.log(error);
                    res.send('An error occured');
                });
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};

//PUT - mark project that it is done
exports.markDoneProject = function(req, res){
    var id = req.body.id;
    new Project()
        .query('where', 'id', '=', id)
        .fetch()
        .then(function(project) {
            project
                .save({
                    completed: '1'
                })
                .then(function(project) {
                    res.send(project.toJSON());
                }).catch(function(error) {
                    console.log(error);
                    res.send('An error occured');
                });
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};


exports.deleteProject = function(req, res){
    var id = req.params.id;
    new Project()
        .query('where', 'id', '=', id)
        .fetch()
        .then(function(project) {
            project
                .save({
                    valid: '0'
                })
                .then(function(project) {
                    res.send(project.toJSON());
                }).catch(function(error) {
                    console.log(error);
                    res.send('An error occured');
                });
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
};


//PUT
exports.assignEmployee = function(req, res){
    console.log("Request pid: " + req.body.project_id);
    var project_id = req.body.project_id;
    var employee = req.body.employee;
    console.log(employee.name);
    new Project()
        .query('where', 'id', '=', project_id)
        .fetch()
        .then(function(project) {
            project
                .save({
                })
                .then(function(project) {
                    console.log(project.name);
                    project.employees.attach(employee);
                    res.send(project.toJSON());
                }).catch(function(error) {
                    console.log("err1 " + error);
                    res.send('An error occured' + error);
                });
        }).catch(function(error) {
            console.log("err2 " + error);
            res.send('An error occured' + error);
        });
};
