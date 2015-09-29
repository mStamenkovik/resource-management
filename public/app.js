/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp = angular.module('chartsApp', [ 'ngResource', 'ui.router']);

chartsApp.factory('HRHttpInterceptors', function($q, $location, $rootScope) {
    return {
        'request': function (config) {

            config.headers['Authorization'] = 'Basic YWRtaW46YWRtaW4=';
            //config.headers['Accept'] = 'application/json;odata=verbose';

            return config;
        }
    };
});


chartsApp.config(['$httpProvider',
    function($httpProvider) {

        $httpProvider.interceptors.push('HRHttpInterceptors');
    }]);

