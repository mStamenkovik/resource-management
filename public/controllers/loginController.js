/**
 * Created by Polar Cape on 16-Sep-15.
 */

 /* controller that handles the login view */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', 'UserService', '$location', '$rootScope', '$state',
    function($scope, UserFactory, UserService, $location, $rootScope, $state){
        $scope.user = {};
        /* message to display if user enters bad credentials */
        $scope.message = "";

        /* when url is /login, a check is made to see whether a user is logged in; 
           if user is not logged in, redirects to login;
           else sets a variable to show or hide some aspects of the view*/
        if (angular.isDefined(sessionStorage.token)) {
            $scope.userLogged = true;

            $scope.loggedIn = true;
            
            /* redirects to home page of admin or employee;
               depends on role  */
            if (sessionStorage.userRole == 'ROLE_ADMIN') {
                $scope.adminLogged = true;
                $location.path("admin/overview");
            }
            else {
                $scope.adminLogged = false;
                $location.path("employee/overview");

            }
        }
        else {
            $location.path("login");
        }


    /* called when login button is clicked */
        $scope.login = function(){
         
         /* using UserFactory to check whether username and password are correct*/
            UserFactory.authenticate($.param({
                /* required params by oauth2 */
                grant_type: 'password',
                username: $scope.user.username,
                password: $scope.user.password
            })).$promise.then(function (data){
                    /* successful authentication */
                    /* get the returned token and set it in sessionStorage.token to be accessible */
                    sessionStorage.token = data.access_token;
                    /* to handle routing and privileges, the user's role is kept in sessionStorage;
                       get the user's role with UserService.getRole() 
                    */
                    UserService.getRole().$promise.then(function (data){
                        var role = "";
                        var i;

                        for (i = 0; i < 15; i++) {
                            if(angular.isDefined(data[i])) {
                                role += data[i];
                            }
                        }

                        sessionStorage.userRole = role;
                        window.location.reload();

                    }, function(error){
                        alert("Error get role");
                    });
                }, function(error){
                    $scope.message = "Bad credentials - Incorrect username/password"
                    //alert("Error:  " + error.data);
                });

        };


    }]);

