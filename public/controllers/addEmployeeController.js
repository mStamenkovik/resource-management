/**
 * Created by Polar Cape on 11-Sep-15.
 */
chartsApp.controller('AddEmployeeCtrl', ['$scope','EmployeesFactory', '$location', function($scope, EmployeesFactory, $location){

    $scope.addEmployee = function () {

        EmployeesFactory.create($scope.employee
         /*   $.param(
            {
                name : $scope.employee.name,
                lastName : $scope.employee.lastName,
                jobDescription : $scope.employee.jobDescription
            }
          )*/
        ).$promise.then(function (employee){
                    alert("Employee added!");
                   $location.path('/admin/employees');
            }, function(error){
                alert("Error:  " + error.data);
            });
       };
}]);

