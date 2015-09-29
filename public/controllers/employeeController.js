/**
 * Created by Polar Cape on 10-Sep-15.
 */
chartsApp.controller('EmployeeCtrl', ['$scope','EmployeesFactory', 'EmployeeFactory', '$location', function($scope, EmployeesFactory, EmployeeFactory, $location){

    $scope.viewEmployee = function(id){
        $location.path('/admin/employee/view/' + id);
    };

    $scope.removeEmployee = function(id, index){
        var result = confirm("Are you sure you want to delete employee?");
        if(result) {
            EmployeeFactory.delete({ id: id }).$promise.then(function (data){
                 $scope.employees.splice(index, 1);
            }, function(error){
                alert("Error:  " + error.data);
            });
        }
    };

    $scope.editEmployee = function(id){
       $location.path('/admin/employee/edit/' + id);
    };



        EmployeesFactory.query(function(data){
            $scope.employees = data;
        }, function(error){
            alert("error " + error);
        });

}]);

