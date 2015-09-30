/**
 * Created by Polar Cape on 30-Sep-15.
 */


chartsApp.controller('navbarCtrl', ['$scope','UserFactory', '$location', function($scope, UserFactory, $location) {

    if (sessionStorage.loggedIn) {
        $scope.userLogged = true;
        //console.log("parse: " + sessionStorage.user);

        $scope.user = JSON.parse(sessionStorage.user);
        $scope.loggedIn = sessionStorage.loggedIn;
        //console.log("role: " + $scope.user.role);
        if ($scope.user.role == "admin") {
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
        delete sessionStorage.user;
        delete sessionStorage.loggedIn;
        $scope.loggedIn = false;
        $scope.userLogged = false;
        $scope.adminLogged = false;
        $location.path("/login");
    };

}]);