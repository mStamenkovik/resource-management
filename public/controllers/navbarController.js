/**
 * Created by Polar Cape on 30-Sep-15.
 */


chartsApp.controller('navbarCtrl', ['$scope','UserFactory', '$location', function($scope, UserFactory, $location) {

    if (angular.isDefined(sessionStorage.token)) {
        $scope.userLogged = true;

        $scope.loggedIn = true;
        //console.log("role: " + $scope.user.role);
        if (sessionStorage.userRole == "admin") {
            $scope.adminLogged = true;
        }
        else {
            $scope.adminLogged = false;

        }
    }
    else {
        $location.path("login");
    }

    $scope.logout = function () {
        delete sessionStorage.token;
        delete sessionStorage.loggedIn;
        $scope.loggedIn = false;
        $scope.userLogged = false;
        $scope.adminLogged = false;
        $location.path("/login");
    };

}]);