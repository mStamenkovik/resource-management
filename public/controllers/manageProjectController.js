/**
 * Created by Polar Cape on 30-Sep-15.
 */
chartsApp.controller('ManageProjectCtrl', ['$scope', 'ProjectFactory', '$stateParams', function($scope, ProjectFactory, $stateParams){

    /*var project = ProjectFactory.show({id: $stateParams.id}).$promise.then(function(data){
        $scope.project = data;
        $scope.project.fromDate = new Date(data.fromDate);
        $scope.project.toDate = new Date(data.toDate);
    }, function(error){
        alert("Error");
    });*/

    $scope.roles = ['Backend', 'Frontend', 'Designer'];


}]);