/**
 * Created by Polar Cape on 18-Sep-15.
 */
chartsApp.controller('AssignCtrl', ['$scope','ProjectFactory', 'ProjectsFactory','EmployeesFactory', 'ProjectAssignFactory', '$location','$routeParams',
    function($scope, ProjectFactory, ProjectsFactory, EmployeesFactory, ProjectAssignFactory, $location, $routeParams){
        var employee = [];
        $scope.selectProject = [];
        $scope.selectEmployee = employee;
        $scope.assignedEmployees = [];


       /* $scope.selectedProject = function(){
            $scope.employees = $scope.project.employees;
        };

        $scope.selectedEmployee = function(){
            $scope.assignedEmployees.push($scope.employee);
        };*/

        $scope.save = function(){
            /*var result = confirm("Assign employees to project?");
            if(result){*/
                angular.forEach($scope.assignedEmployees, function(value, index){
                   // console.log("val: " + value.id);
                    var ids = {
                        project_id: $scope.selectProject.id,
                        employee: value
                    };
                        ProjectAssignFactory.update(ids);

                });
           // }
        };

        $scope.assignEmployee = function(){
            $scope.assignedEmployees.push($scope.selectEmployee[0]);
            //$scope.allEmployees.splice(1, index);
        };

    $scope.projects = ProjectsFactory.query();
    $scope.allEmployees = EmployeesFactory.query();
}]);