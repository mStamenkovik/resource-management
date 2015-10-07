/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', '$location', '$rootScope',
                   function($scope, UserFactory, $location, $rootScope){
     $scope.user = {};

    if(sessionStorage.loggedIn){
        $scope.user = JSON.parse(sessionStorage.user);
        $scope.loggedIn = sessionStorage.loggedIn;
       // console.log("Login user role: " + $scope.user.role);


        if($scope.user.role == "admin" ){
            $location.path("admin/employees");
        }
        else {
            $location.path("employee");
        }
    }



    $scope.login = function(){

        UserFactory.authenticate($.param({
                grant_type: 'password',
                username: $scope.user.username,
                password: $scope.user.password
        })).$promise.then(function (data){
            sessionStorage.token = data.access_token;

            //alert("Ok " + data);
            //console.log(data);
        }, function(error){
            alert("Error:  " + error.data);
        });

    };


}]);

