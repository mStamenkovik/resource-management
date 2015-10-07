/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp = angular.module('chartsApp', [ 'ngResource', 'ui.router', 'base64', 'angular-loading-bar', 'satellizer']);

chartsApp.factory('HRHttpInterceptors', ['$base64', function($base64) {
    return {
        'request': function (config) {
          // console.log("Def: " + angular.isDefined(sessionStorage.token));

            if(angular.isDefined(sessionStorage.token)){
                /*var session_user = JSON.parse(sessionStorage.user);
                var user = session_user.username + ':' + session_user.password;
                var encodedUser = $base64.encode(user);*/

               var token = sessionStorage.token;
                /*console.log("TOKEN: " + token);*/
                config.headers['Authorization'] = 'Bearer ' + token;
            }




            //config.headers['Authorization'] = 'Basic YWRtaW46YWRtaW4=';
            //config.headers['Accept'] = 'application/json;odata=verbose';

            return config;
        }
    };
}]);


chartsApp.config(['$httpProvider', '$authProvider',
    function($httpProvider, $authProvider) {

        //$authProvider.loginUrl = 'http://10.10.20.84:8080/oauth/token';

        $httpProvider.interceptors.push('HRHttpInterceptors');

    }]);

