/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', 'UserService', '$location', '$rootScope', '$state',
    function($scope, UserFactory, UserService, $location, $rootScope, $state){
        $scope.user = {};
        $scope.message = "";

        if (angular.isDefined(sessionStorage.token)) {
            $scope.userLogged = true;

            $scope.loggedIn = true;
            //console.log("role: " + $scope.user.role);
            if (sessionStorage.userRole == 'ROLE_ADMIN') {
                $scope.adminLogged = true;
                $location.path("admin/overview");
            }
            else {
                $scope.adminLogged = false;
                $location.path("employee");

            }
        }
        else {
            $location.path("login");
        }



        $scope.login = function(){

            UserFactory.authenticate($.param({
                grant_type: 'password',
                username: $scope.user.username,
                password: $scope.user.password
            })).$promise.then(function (data){

                    sessionStorage.token = data.access_token;
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

