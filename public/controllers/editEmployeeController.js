/**
 * Created by Polar Cape on 14-Sep-15.
 */
chartsApp.controller('EditEmployeeCtrl', ['$scope','EmployeeFactory', '$location','$routeParams', function($scope, EmployeeFactory, $location,$routeParams){

    // callback for ng-click 'updateEmployee':
    $scope.updateEmployee = function () {
        EmployeeFactory.update($scope.employee[0]);
        $location.path('/admin/employeeslist');
    };

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/employeeslist');
    };

    $scope.employee = EmployeeFactory.show({id: $routeParams.id});

}]);

chartsApp.controller('ViewEmployeeCtrl', ['$scope','EmployeeFactory', '$location','$routeParams', function($scope, EmployeeFactory, $location,$routeParams){

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/employeeslist');
    };

    $scope.employee = EmployeeFactory.show({id: $routeParams.id});

}]);