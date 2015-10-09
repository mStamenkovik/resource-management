/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('AddProjectCtrl', ['$scope','ProjectsFactory', 'EmployeesFactory', '$location', function($scope, ProjectsFactory, EmployeesFactory, $location){

    $scope.addProject = function () {
        var managerId = $scope.selectManager.id;
        $scope.project.managerId = managerId;

        ProjectsFactory.create($scope.project).$promise.then(function (employee){
            alert("Project added!");
            $location.path('/admin/projects');
        }, function(error){
            alert("Error:  " + error.data);
        });
    };

    EmployeesFactory.query(function(data){
        $scope.employees = data;
    }, function(error){
        alert("error " + error);
    });

    $scope.cancel = function(){
      $location.path('/admin/projects');
    };

}]);

