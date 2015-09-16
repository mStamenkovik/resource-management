/**
 * Created by Polar Cape on 11-Sep-15.
 */
chartsApp.controller('ProjectCtrl', ['$scope','ProjectsFactory', '$location','$routeParams','ProjectFactory', function($scope, ProjectsFactory, $location, $routeParams, ProjectFactory){

    $scope.removeProject = function(id){
        var result = confirm("Are you sure you want to delete the project?");
        if(result) {
            ProjectFactory.delete({ id: id });
            $scope.projects =  ProjectsFactory.query();
        }
    };

    $scope.editProject = function(id){
        $location.path('/admin/project/edit/' + id);
    };

    $scope.projects = ProjectsFactory.query();
}]);