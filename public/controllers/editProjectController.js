/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.controller('EditProjectCtrl', ['$scope','ProjectFactory', 'EmployeeFactory', 'EmployeesFactory', '$location','$stateParams',
       function($scope, ProjectFactory, EmployeeFactory, EmployeesFactory, $location, $stateParams){

    // callback for ng-click 'updateProject':
    $scope.updateProject = function () {
        var managerId = $scope.selectManager.id;
        $scope.project.managerId = managerId;

        ProjectFactory.update($scope.project).$promise.then(function (data){
            $location.path('/admin/projects');
        }, function(error){
            alert("Error:  " + error.data);
        });
    };

       EmployeesFactory.query(function(data){
           $scope.employees = data;
           //var indexEmployee = '';
           //$scope.selectManager = employees[indexEmployee];
       }, function(error){
           alert("error " + error);
       });



    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/admin/projects');
    };

    var project = ProjectFactory.show({id: $stateParams.id}).$promise.then(function(data){
        $scope.project = data;
        $scope.project.fromDate = new Date(data.fromDate);
        $scope.project.toDate = new Date(data.toDate);
    }, function(error){
        alert("Error");
    });

}]);


chartsApp.controller('ViewProjectCtrl', ['$scope','ProjectFactory', 'ProjectService', '$location', '$stateParams', 
   function($scope, ProjectFactory, ProjectService, $location, $stateParams){

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
      var part = $location.path().split(/[\s/]+/)[1];
          if(part == 'admin'){
                 $location.path('/admin/projects');
            }
            else {
               $location.path('/employee/projects');
            }
    };

    var project = ProjectFactory.show({id: $stateParams.id}).$promise.then(function(data){
            $scope.project = data;
        $scope.manager = data.manager.name + ' ' + data.manager.lastName;
        var assignedEmployees = ProjectService.getEffortForProject($scope.project.id)
               .$promise.then(function(data){
                     $scope.assignedEmployees = data;
                          }
                 ,function(error){
                       alert("Error " + data);
            }); 
        }, function(error){
             alert("Error");
        });



}]);

