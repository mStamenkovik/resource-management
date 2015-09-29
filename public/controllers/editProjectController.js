/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('EditProjectCtrl', ['$scope','ProjectFactory', '$location','$routeParams', function($scope, ProjectFactory, $location, $routeParams){

    // callback for ng-click 'updateProject':
    $scope.updateProject = function () {
        ProjectFactory.update($scope.project[0]).$promise.then(function (data){
            $location.path('/admin/projects');
        }, function(error){
            alert("Error:  " + error.data);
        });
    };

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/projects');
    };

    var project = ProjectFactory.show({id: $routeParams.id}).$promise.then(function(data){
        $scope.project = data;
    }, function(error){
        alert("Error");
    });

}]);

chartsApp.controller('ViewProjectCtrl', ['$scope','ProjectFactory', '$location','$routeParams', function($scope, ProjectFactory, $location, $routeParams){

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/projects');
    };

    var project = ProjectFactory.show({id: $routeParams.id}).$promise.then(function(data){
            $scope.project = data;
        }, function(error){
             alert("Error");
        });

}]);

