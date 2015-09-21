/**
 * Created by Polar Cape on 17-Sep-15.
 */
chartsApp.controller('ViewProjectCtrl', ['$scope','ProjectFactory', '$location','$routeParams', function($scope, ProjectFactory, $location, $routeParams){

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/projects');
    };

    $scope.project = ProjectFactory.show({id: $routeParams.id});

}]);