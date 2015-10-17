/**
 * Created by Polar Cape on 10-Sep-15.
 */

 /* controller to display the main list with employees */
chartsApp.controller('EmployeeCtrl', ['$scope','EmployeesFactory', 'EmployeeFactory', '$location',
          function($scope, EmployeesFactory, EmployeeFactory, $location){

        /**
          *  redirects to view;
          *  @param id - The employee id.
        **/
        $scope.viewEmployee = function(id){
           $location.url('/admin/employee/view/' + id);
        };
        
        /**
          * displays an alert to ask for confirmation;
          * first makes the delete request, and after it returns status ok,
          * makes another call to get all the employees    
        **/
        $scope.removeEmployee = function(id, index){
            var result = confirm("Are you sure you want to delete employee?");
            if(result) {
                EmployeeFactory.delete({ id: id }).$promise.then(function (data){
                      EmployeesFactory.query(function(data){
                            $scope.employees = data;
                        }, function(error){
                            alert("error " + error);
                        });
                }, function(error){
                    alert("Error:  " + error.data);
                });
            }
        };

        /**
          *  redirects to edit;
          *  @param id - The employee id.
        **/
        $scope.editEmployee = function(id){
           $location.path('/admin/employee/edit/' + id);
        };

        /*
             gets all employees
        */
        EmployeesFactory.query(function(data){
            $scope.employees = data;
        }, function(error){
            alert("error " + error);
        });

}]);

