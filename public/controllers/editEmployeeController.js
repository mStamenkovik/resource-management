/**
 * Created by Polar Cape on 14-Sep-15.
 */
chartsApp.controller('EditEmployeeCtrl', ['$scope','EmployeeFactory', '$location','$stateParams', function($scope, EmployeeFactory, $location,$stateParams){

    // callback for ng-click 'updateEmployee':
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

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/employees');
    };

    /*var jobs = Job.query().$promise.then(function(jobs) {
        $scope.jobs = jobs;
    });*/

    //$scope.employee = EmployeeFactory.show({id: $routeParams.id});

      //display employee to change
      var employee  = EmployeeFactory.show({id: $stateParams.id}).$promise.then(function (employee){
           $scope.employee = employee;
      }, function(error){
            alert("Error:  " + error.data);
      });

}]);

chartsApp.controller('ViewEmployeeCtrl', ['$scope','EmployeeFactory', '$location', '$stateParams', function($scope, EmployeeFactory, $location, $stateParams){


    //console.log("konzole log");
    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/employees');
    };

    var employee  = EmployeeFactory.show({id: $stateParams.id}).$promise.then(function (employee){
        $scope.employee = employee;
    }, function(error){
        alert("Error:  " + error.data);
    });

}]);