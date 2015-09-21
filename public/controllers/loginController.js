/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', '$location', '$routeParams', '$rootScope', '$route', function($scope, UserFactory, $location, $routeParams, $rootScope, $route){
   /* $rootScope.adminLoggedIn = false;
    $rootScope.userLoggedIn = false;*/
     $scope.user = {};

    if(sessionStorage.loggedIn){
        $scope.user = JSON.parse(sessionStorage.user);
        $scope.loggedIn = sessionStorage.loggedIn;
       // console.log("Login user role: " + $scope.user.role);
        if($scope.user.role == "admin" ){
            $location.path("admin/employeeslist");
        }
        else {
            $location.path("projects");
        }

    }

    $scope.login = function(){
        UserFactory.authenticate($scope.user, function(res){
            if(res.type == true){
                //console.log("Res type: " + res.type);
                $scope.loggedIn = true;
                sessionStorage.loggedIn = $scope.loggedIn;
                sessionStorage.user = JSON.stringify(res.data);
                window.location.reload();
                //console.log("JSON stringify: " + JSON.stringify(res.data));

               /* if(res.data.role == "admin") {
                    //alert($scope.adminLogged);
                    $rootScope.adminLoggedIn = true;
                    $location.path("admin/employeeslist");
                }
                else if(res.data.role == "user"){
                    $rootScope.userLoggedIn = true;
                    $location.path("projects");
                }*/
            }
            else {
                $scope.message = res.data;
            }

        });
    };


}]);
/*
if(sessionStorage.loggedIn){
    $scope.user = JSON.parse(sessionStorage.user);
    $scope.loggedIn = sessionStorage.loggedIn;
    if($scope.user.role == "admin"){
        $location.path("admin/employeeslist");
    }
    else {
        $location.path("projects");
    }

}

$scope.login = function(){
    UserFactory.authenticate($scope.user, function(res){
        if(res.type == true){
            $scope.loggedIn = true;
            sessionStorage.loggedIn = $scope.loggedIn;
            sessionStorage.user = JSON.stringify(res.data.user);
            $route.reload();
        }
        else {
            $scope.message = res.data;
        }
    });
};*/
