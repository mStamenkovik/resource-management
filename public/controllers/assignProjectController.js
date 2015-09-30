/**
 * Created by Polar Cape on 18-Sep-15.
 */
chartsApp.controller('AssignCtrl', ['$scope','ProjectFactory', 'ProjectsFactory','EmployeesFactory', 'ProjectAssignFactory', '$location',
    function($scope, ProjectFactory, ProjectsFactory, EmployeesFactory, ProjectAssignFactory, $location){
        var employee = [];

        $scope.selectProject = [];
        $scope.assignedEmployees = [];
        $scope.selectEmployee = employee;
        $scope.firstOption = true;

        $scope.removeFirstOption = function(){
            $scope.firstOption = false;
        };

        $scope.save = function(){
            var result = confirm("Assign employees to project?");
            if(result){
                angular.forEach($scope.assignedEmployees, function(value, index){
                    var projectID = $scope.selectProject.id;

                    var employee = $.param({
                        'employeeId' : value.id,
                        'percent': '50'
                    });
                        ProjectAssignFactory.update({id: projectID}, employee).$promise.then(function (data){
                           alert("Employees assigned");
                        }, function(error){
                            alert("Error:  " + error.data);
                        });
                });
           }
        };


        $scope.assignEmployee = function(item, from, to){
            //console.log('Move item   Item: '+item.name +' From:: '+from+' To:: '+to);
            angular.forEach(item, function(value){
                var index = from.indexOf(value);
                if(index != -1){
                    from.splice(index, 1);
                    to.push(value);
                }
            });
        };


            var projects = ProjectsFactory.query().$promise.then(function (data){
                $scope.projects = data;
            }, function(error){
                alert("Error:  " + error.data);
            });

           var allEmployees = EmployeesFactory.query().$promise.then(function (data){
                $scope.allEmployees = data;
            }, function(error){
                alert("Error:  " + error.data);
            });
}]);



