/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('AddProjectCtrl', ['$scope','ProjectsFactory', '$location','$routeParams', function($scope, ProjectsFactory, $location,$routeParams){
    var id = $routeParams.id;

    $scope.addProject = function () {
        ProjectsFactory.create($scope.project);
        alert("Project added!");
        $location.path('/admin/projects');
    };

}]);