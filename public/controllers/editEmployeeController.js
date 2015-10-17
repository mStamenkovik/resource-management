/**
 * Created by Polar Cape on 14-Sep-15.
 */
/* Edit and View Employee controller*/

/* edits employee*/
chartsApp.controller('EditEmployeeCtrl', ['$scope','EmployeeFactory', '$location','$stateParams', function($scope, EmployeeFactory, $location,$stateParams){

    /* ng-click 'updateEmployee';
       the function doesn't check what fields are changed;
       it updates the entire object
     */
    $scope.updateEmployee = function () {
        var emp = {
            name : $scope.employee.name,
            lastName : $scope.employee.lastName,
            jobDescription: $scope.employee.jobDescription
        };

        EmployeeFactory.update($scope.employee).$promise.then(function (employee){
            $location.path('/admin/employees');
        }, function(error){
            alert("Error:  " + error.data);
        });

    };

    /* ng-click to go back to previous state;
    since only admin can edit the employees list it doesn't check for previous location
    and redirects to employees list view; */
    $scope.cancel = function () {
        $location.path('/admin/employees');
    };

      /* get the employee with given id that needs to be edited;
         on error: alert*/
      var employee  = EmployeeFactory.show({id: $stateParams.id}).$promise.then(function (employee){
           $scope.employee = employee;
      }, function(error){
            alert("Error:  " + error.data);
      });

}]);

/* gets an employee to display */
chartsApp.controller('ViewEmployeeCtrl', ['$scope','EmployeeFactory', '$location', '$stateParams', function($scope, EmployeeFactory, $location, $stateParams){

    /* ng-click to go back to previous state;
    since only admin can view the employees list it doesn't check for previous location
    and redirects to employees list view; */
    $scope.cancel = function () {
        $location.path('/admin/employees');
    };

    /* get the employee with given id;
         on error: alert*/
    var employee  = EmployeeFactory.show({id: $stateParams.id}).$promise.then(function (employee){
        $scope.employee = employee;
    }, function(error){
        alert("Error:  " + error.data);
    });

}]);