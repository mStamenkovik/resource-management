/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp.controller('EmployeeCtrl', ['$scope','EmployeesFactory', 'EmployeeFactory', '$location', '$routeParams', function($scope, EmployeesFactory, EmployeeFactory, $location, $routeParams){


    $scope.removeEmployee = function(id){
        var result = confirm("Are you sure you want to delete employee?");
        if(result) {
            EmployeeFactory.delete({ id: id });
            $scope.employees =  EmployeesFactory.query();
        }
    };

    $scope.editEmployee = function(id){
       $location.path('/admin/employee/edit/' + id);
    };

    $scope.employees = EmployeesFactory.query();


}]);