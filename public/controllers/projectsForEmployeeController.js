chartsApp.controller('ProjectsForEmployeeCtrl', ['$scope','ProjectService', 'UserService', '$location',
    function($scope, ProjectService, UserService, $location){
      
      UserService.getEmployeeByUserId().$promise.then(function(data){
      	var employee = data;
      	   ProjectService.getProjectsForEmployee(employee.id).$promise.then(function(data){
                 $scope.projects = data;
		      }, function(error){
                   alert("Error " + data);
		      });
      }
      	,function(error){
             alert("Error " + data);
      	});
      
    
}]);

