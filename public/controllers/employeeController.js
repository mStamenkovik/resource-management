/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp.controller('EmployeeCtrl', ['$scope','EmployeesFactory', 'EmployeeFactory', '$location', '$routeParams', function($scope, EmployeesFactory, EmployeeFactory, $location, $routeParams){


    $scope.removeEmployee = function(id, index){
        var result = confirm("Are you sure you want to delete employee?");
        if(result) {
            EmployeeFactory.delete({ id: id });
            $scope.employees.splice(index, 1);
        }
    };

    $scope.editEmployee = function(id){
       $location.path('/admin/employee/edit/' + id);
    };

    $scope.employees = EmployeesFactory.query();


}]);