/**
 * Created by Polar Cape on 16-Sep-15.
 */
var path = 'http://10.10.20.84:8080';

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

chartsApp.service('UserService', ['$http', '$resource',  function($http, $resource) {

    this.getManagerByUserId = function(){
        var res = $resource(path + '/data/employees/user');
        return res.get();
    };


}]);