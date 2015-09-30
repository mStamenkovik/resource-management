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
    return $resource('http://10.10.20.84:8080/data/projects/:id/employees', {}, {
        update: {
            method: 'POST'
            , headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
            ,params: {id: '@id'}
        }
    })
});



chartsApp.service('ProjectService', ['$http', '$resource',  function($http, $resource) {

  /*  this.getProjectsByCompletition = function(type){
        var res = $resource('/api/project/completed/:type', {type: '@type'});
        return res.query({type: type});
    };*/

    this.getProjectsByManagement = function(managerId){
        var res = $resource('/api/project/completed/:type', {type: '@type'});
        return res.query({type: type});
    };

}]);


//create
//http://10.10.20.84:8080/data/projects
//show
//http://10.10.20.84:8080/data/projects/:id
