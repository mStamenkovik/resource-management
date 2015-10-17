/**
 * Created by Polar Cape on 11-Sep-15.
 */

 /* controls employee-add view;
    uses EmployeesFactory for creating an employee; */
chartsApp.controller('AddEmployeeCtrl', ['$scope','EmployeesFactory', '$location', function($scope, EmployeesFactory, $location){
   
   /* ng-click to go back to previous state;
    since only admin can add employees it doesn't check for previous location
    and redirects to employees list view; */
    $scope.cancel = function(){
      $location.path('/admin/employees');
    };

    /* function for adding an employee */
    $scope.addEmployee = function () {
 
  /* creating an object to create an employee and an user account for the employee;
      the same form is used - on submit all the data(employee and user) is passed at once; */
        var paramObj = {

            "employee" : {
                "name" : $scope.employee.name,
                "lastName" : $scope.employee.lastName,
                "jobDescription" : $scope.employee.jobDescription
            },
            "user" : {
                "username" : $scope.user.username,
                "password" : $scope.user.password
            }
        }

       /* uses EmployeesFactory to create an employee;
          the paramObj is sent as form data in request body;
          success: alert and redirects;
          error: error alert;

          TODO: replace alerts with messages  */
        EmployeesFactory.create(paramObj).$promise.then(function (employee){
                    alert("Employee added!");
                   $location.path('/admin/employees');
            }, function(error){
                alert("Error:  " + error.data);
            });
       };
}]);

