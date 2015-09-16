
//grab packages
var express = require('express');
var mysql = require('mysql');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//set an express app
var app = express();

var routes = require('./routes');
var api = require('./routes/api');
var projectApi = require('./routes/projectApi');

//app.configure(function(){
    app.set('views', __dirname + '/public/views');
   /* app.set('view options', {
        layout: false
    });*/
    app.use(bodyParser());
    app.use(methodOverride());
  //  app.use(app.router);
    // configure app and tell node where to look for site resources
    app.use(express.static(__dirname + '/public'));

    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

//});
app.set('view engine', 'ejs');

// Routes

app.get('/', routes.index);

// JSON API
// EMPLOYEES API =========================================
app.get('/api/employees', api.employees);
app.post('/api/employees', api.addEmployee);

app.get('/api/employee/:id', api.employee);
app.delete('/api/employee/:id', api.deleteEmployee);
app.put('/api/employee/:id', api.updateEmployee);

// PROJECTS API =====================================================
app.get('/api/projects', projectApi.projects);
app.post('/api/projects', projectApi.addProject);

app.get('/api/project/:id', projectApi.project);

app.put('/api/project/:id', projectApi.updateProject);
app.put('/api/project/done/:id', projectApi.markDoneProject);

////// app.delete('/api/project/:id', projectApi.deleteProject);
// redirect all others to the index (HTML5 history) //////////////////
app.get('*', routes.index);



app.listen(8080);
console.log("App started!!");
