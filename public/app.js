/**
 * Created by Polar Cape on 10-Sep-15.
 */

 /* set chartsApp as main angular app;
    added dependencies */
chartsApp = angular.module('chartsApp', [ 'ngResource', 'ui.router', 'base64', 'angular-loading-bar', 'ui.bootstrap']);

/* interceptor to add token if user is logged in;
  added to $httpProvider.interceptors  */
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


/* tracks changes in url using states ($stateChangeStart) */
chartsApp.run(['$location', '$rootScope', '$state', function($location, $rootScope, $state){
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    
      /*function to check whether user is logged in ( is there a token defined in sessionStorage ) */
      var checkIfLoggedIn = function(){                    
            if (angular.isDefined(sessionStorage.token)){              
                return true;
            }
            else
                return false;
        };
        
    
    /*redirects to login if user is not logged in */
        if (!checkIfLoggedIn()) {
            if(toState.name != 'login'){
                event.preventDefault(); // stop current execution
                $state.go('login');
            }
          
            $location.path('/login');
        }
        else {
           /* prevents employee to access admin;
              checks current and next state and prevents exection if needed;

             --> TODO: add restricted access for each state in router.js */
            
            var part = fromState.name.split(".")[0];
            var partto = toState.name.split(".")[0];
            if((part == 'employee') && (partto == 'admin')){
                    event.preventDefault(); // stop current execution
                $state.go('login');
            }
        }
       
        
      });
}]);

/*configuration for interceptors*/
chartsApp.config(['$httpProvider',
    function($httpProvider) {

        //$authProvider.loginUrl = 'http://10.10.20.84:8080/oauth/token';
        
        /*add the HRHttpInterceptors factory to the interceptors
         - HRHttpInterceptors factory checks if user is logged in and has a token
           and it appends the authentication token in the header*/
        $httpProvider.interceptors.push('HRHttpInterceptors');

}]);

