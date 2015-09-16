/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('LoginCtrl', ['$scope','UserFactory', '$location', '$routeParams', function($scope, UserFactory, $location, $routeParams){

    $scope.login = function(){
       UserFactory.authenticate($scope.user, function(res){
           alert(res.type);
       });
    };
    
}]);