/**
 * Created by Polar Cape on 16-Sep-15.
 */
var path = 'http://localhost:8080';

chartsApp.factory('UserFactory', function ($resource) {
    return $resource(path + '/oauth/token', {}, {
        authenticate: { method: 'POST',
         headers: {
             'Authorization' : 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==',
             'Content-Type' : 'application/x-www-form-urlencoded',
             'Accept' : 'application/json'
         }
        }
    })
});

/////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!
chartsApp.service('UserService', ['$http', '$resource',  function($http, $resource) {

    this.getEmployeeByUserId = function(){
        var res = $resource(path + '/data/employees/user');
        return res.get();
    };

    this.getRole = function(){
        var res = $resource(path + '/data/employees/user/role');
        return res.get();
    };
}]);