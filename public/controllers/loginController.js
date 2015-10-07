/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', 'UserService', '$location', '$rootScope', '$state',
                   function($scope, UserFactory, UserService, $location, $rootScope, $state){
     $scope.user = {};

            if (angular.isDefined(sessionStorage.token)) {
                $scope.userLogged = true;

                $scope.loggedIn = true;
                           //console.log("role: " + $scope.user.role);
                  if (sessionStorage.userRole == 'ROLE_ADMIN') {
                       $scope.adminLogged = true;
                       $location.path("admin/employees");
                      }
                    else {
                        $scope.adminLogged = false;

                     }
                       }
                     else {
                           $location.path("login");
                       }
    /*if(sessionStorage.loggedIn){
        $scope.user = JSON.parse(sessionStorage.user);
        $scope.loggedIn = sessionStorage.loggedIn;
       // console.log("Login user role: " + $scope.user.role);


        if($scope.user.role == "admin" ){
            $location.path("admin/employees");
        }
        else {
            $location.path("employee");
        }
    }*/



    $scope.login = function(){

        UserFactory.authenticate($.param({
                grant_type: 'password',
                username: $scope.user.username,
                password: $scope.user.password
        })).$promise.then(function (data){

             sessionStorage.token = data.access_token;
                console.log("Session token: " + sessionStorage.token);
              UserService.getRole().$promise.then(function (data){
                  var role = "";
                  var i;
                  for (i = 0; i < 15; i++) {
                    if(angular.isDefined(data[i])) {
                        role += data[i];
                        console.log(data[i]);
                    }
                  }
            sessionStorage.userRole = role;

                  $scope.userLogged = true;
                  console.log("Role: " + role);
                  if(role == 'ROLE_ADMIN'){
                      //console.log("ADMIN");
                      $location.path("admin");
                  }
                  else if(role == 'ROLE_USER'){
                      //console.log("USER");
                      $location.path("employee");
                  }
              }, function(error){
                  alert("Error");
              });
             //$state.go('employee', {});

            //alert("Ok " + data);
            //console.log(data);
        }, function(error){
            alert("Error:  " + error.data);
        });

    };


}]);

