/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp = angular.module('chartsApp', [ 'ngResource', 'ui.router', 'base64', 'angular-loading-bar', 'ui.bootstrap']);

chartsApp.factory('HRHttpInterceptors', ['$base64', function($base64) {
    return {
        'request': function (config) {

            if(angular.isDefined(sessionStorage.token)){

               var token = sessionStorage.token;
                /*console.log("TOKEN: " + token);*/
                config.headers['Authorization'] = 'Bearer ' + token;
            }


            return config;
        }
    };
}]);


chartsApp.run(['$location', '$rootScope', '$state', function($location, $rootScope, $state){
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    

      var checkIfLoggedIn = function(){                    
            if (angular.isDefined(sessionStorage.token)){              
                return true;
            }
            else
                return false;
        };
        
        /*console.log("next.templateUrl -> " + next.templateUrl);
        console.log("current.templateUrl -> " + current.templateUrl);
        console.log("check rootscope: " + $rootScope.isLoggedIn);*/
          //console.log("state "  + fromState.name);
          //console.log("stateto "  + toState.name);
        if (!checkIfLoggedIn()) {
            if(toState.name != 'login'){
                event.preventDefault(); // stop current execution
                $state.go('login');
            }
          
            $location.path('/login');
        }
        else {
            var part = fromState.name.split(".")[0];
            var partto = toState.name.split(".")[0];
            if((part == 'employee') && (partto == 'admin')){
                    event.preventDefault(); // stop current execution
                $state.go('login');
            }
        }
       
        
      });
}]);


chartsApp.config(['$httpProvider',
    function($httpProvider) {

        //$authProvider.loginUrl = 'http://10.10.20.84:8080/oauth/token';

        $httpProvider.interceptors.push('HRHttpInterceptors');

    }]);

