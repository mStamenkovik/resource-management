/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('EditProjectCtrl', ['$scope','ProjectFactory', '$location','$routeParams', function($scope, ProjectFactory, $location, $routeParams){

    // callback for ng-click 'updateProject':
    $scope.updateProject = function () {
        ProjectFactory.update($scope.project[0]);
        $location.path('/admin/projects');
    };

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/projects');
    };

    $scope.project = ProjectFactory.show({id: $routeParams.id});

}]);