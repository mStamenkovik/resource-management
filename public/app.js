/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp = angular.module('chartsApp', [ 'ngResource', 'ui.router', 'base64', 'angular-loading-bar']);

chartsApp.factory('HRHttpInterceptors', ['$base64', function($base64) {
    return {
        'request': function (config) {

            if(angular.isDefined(sessionStorage.user)){
                var session_user = JSON.parse(sessionStorage.user);
                var user = session_user.username + ':' + session_user.password;
                var encodedUser = $base64.encode(user);

                config.headers['Authorization'] = 'Basic ' + encodedUser;
            }

            //config.headers['Authorization'] = 'Basic YWRtaW46YWRtaW4=';
            //config.headers['Accept'] = 'application/json;odata=verbose';

            return config;
        }
    };
}]);


chartsApp.config(['$httpProvider',
    function($httpProvider) {

        $httpProvider.interceptors.push('HRHttpInterceptors');

    }]);

