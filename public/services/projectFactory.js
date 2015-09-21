/**
 * Created by Polar Cape on 11-Sep-15.
 */
//factory for adding a project and getting all the list of all projects
chartsApp.factory('ProjectsFactory', ['$http', '$resource',
    function($http, $resource){
        return $resource('/api/projects', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' }
        })
    }]);

//factory for getting a project by id, updating a project
chartsApp.factory('ProjectFactory', function ($resource) {
    return $resource('/api/project/:id', {}, {
        show: { method: 'GET', isArray: true },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

//factory for assigning an employee to a project
chartsApp.factory('ProjectAssignFactory', function ($resource) {
    return $resource('/api/project/assign', {}, {
        update: {
            method: 'POST'
            /*, headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }*/
        }
    })
});



chartsApp.service('ProjectService', ['$http', '$resource',  function($http, $resource) {

    this.getProjectsByCompletition = function(type){
        var res = $resource('/api/project/completed/:type', {type: '@type'});
        return res.query({type: type});
    };
}]);