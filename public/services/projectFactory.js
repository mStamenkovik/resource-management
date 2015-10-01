/**
 * Created by Polar Cape on 11-Sep-15.
 */
//factory for adding a project and getting all the list of all projects
chartsApp.factory('ProjectsFactory', ['$http', '$resource',
    function($http, $resource){
        return $resource('http://10.10.20.84:8080/data/projects', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' }
        })
    }]);

//factory for getting a project by id, updating a project
chartsApp.factory('ProjectFactory', function ($resource) {
    return $resource('http://10.10.20.84:8080/data/projects/:id', {}, {
        show: { method: 'GET', isArray: false },
        update: {
            method: 'PUT'
            /*,headers : {
             'Content-Type' : 'application/x-www-form-urlencoded'
             }*/
            , params: {id: '@id'}
        },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

//factory for assigning an employee to a project
chartsApp.factory('ProjectAssignFactory', function ($resource) {
    return $resource('http://10.10.20.84:8080/data/projects/:id/employees/:employeeId/effort', {}, {
        update: {
            method: 'POST'
            ,params: {id: '@id', employeeId: '@employeeId'}
        },
    })
});



chartsApp.service('ProjectService', ['$http', '$resource',  function($http, $resource) {

    this.getProjectsByManagement = function(id){
        var res = $resource('http://10.10.20.84:8080/data/employees/:id/projects/manager', {id: '@id'});
        return res.query({id: id});
    };

    this.getEffortForProject = function(id){
        var res = $resource('http://10.10.20.84:8080/data/projects/:id/employees/effort', {id: '@id'});
        return res.query({id: id});
    };

}]);


//create
//http://10.10.20.84:8080/data/projects
//show
//http://10.10.20.84:8080/data/projects/:id
