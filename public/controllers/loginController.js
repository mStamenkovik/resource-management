/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', '$location', '$routeParams', '$rootScope', function($scope, UserFactory, $location, $routeParams, $rootScope){
    $rootScope.adminLoggedIn = false;
    $rootScope.userLoggedIn = false;

    $scope.login = function(){
       UserFactory.authenticate($scope.user, function(res){
           if(res.type == true){
               if(res.data.role == "admin") {
                   //alert($scope.adminLogged);
                   $rootScope.adminLoggedIn = true;
                   $location.path("admin/employeeslist");
               }
               else if(res.data.role == "employee"){
                   $rootScope.userLoggedIn = true;
                   $location.path("projects");
               }
           }
           else {
               $scope.message = res.data;
           }

       });
    };

}]);