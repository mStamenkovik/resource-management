/**
 * Created by Polar Cape on 17-Sep-15.
 */
chartsApp.controller('SideCtrl', ['$scope','UserFactory', '$location', '$rootScope', function($scope, UserFactory, $location, $rootScope){
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

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };


}]);