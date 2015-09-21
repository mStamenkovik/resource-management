/**
 * Created by Polar Cape on 17-Sep-15.
 */
chartsApp.controller('SideCtrl', ['$scope','UserFactory', '$location', '$routeParams', '$rootScope', function($scope, UserFactory, $location, $routeParams, $rootScope){
    /*   $scope.checkIfAdminLoggedIn = function(){
       if($rootScope.adminLoggedIn) {
           return true;
       }
        else {
           return false;
       }
    };

    $scope.checkIfUserLoggedIn = function(){
      if($rootScope.adminLoggedIn || $rootScope.userLoggedIn){
          return true;
      }
      else{
          return false;
      }
    };
*/
    $scope.sideTab = 1;

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    if(sessionStorage.loggedIn){
        $scope.userLogged = true;
        //console.log("parse: " + sessionStorage.user);

        $scope.user = JSON.parse(sessionStorage.user);
        $scope.loggedIn = sessionStorage.loggedIn;
        //console.log("role: " + $scope.user.role);
        if($scope.user.role == "admin"){
            $scope.adminLogged = true;
        }
        else {
            $scope.adminLogged = false;

        }
    }
    else {
        $location.path("login");
    }

    $scope.logout = function(){
        delete sessionStorage.user;
        delete sessionStorage.loggedIn;
        $scope.loggedIn = false;
        $scope.userLogged = false;
        $scope.adminLogged = false;
        $location.path("/login");
    };

}]);