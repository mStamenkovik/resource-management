/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('AddProjectCtrl', ['$scope','ProjectsFactory', '$location', function($scope, ProjectsFactory, $location){

    $scope.addProject = function () {
        ProjectsFactory.create($scope.project).$promise.then(function (employee){
            alert("Project added!");
            $location.path('/admin/projects');
        }, function(error){
            alert("Error:  " + error.data);
        });
    };
}]);

