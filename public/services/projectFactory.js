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

