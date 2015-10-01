/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.factory('UserFactory', function ($resource) {
    return $resource('/api/user/authenticate', {}, {
        authenticate: { method: 'POST' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

chartsApp.service('UserService', ['$http', '$resource',  function($http, $resource) {

    this.getManagerByUserId = function(){
        var res = $resource('http://10.10.20.84:8080/data/employees/user');
        return res.get();
    };


}]);