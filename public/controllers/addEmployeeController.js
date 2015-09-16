/**
 * Created by Polar Cape on 11-Sep-15.
 */
chartsApp.controller('AddEmployeeCtrl', ['$scope','EmployeesFactory', '$location','$routeParams', function($scope, EmployeesFactory, $location,$routeParams){
      var id = $routeParams.id;

    $scope.addEmployee = function () {
        EmployeesFactory.create($scope.employee);
        alert("Employee added!");
        $location.path('/admin/employeeslist');
    };

}]);


