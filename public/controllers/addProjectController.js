/**
 * Created by Polar Cape on 16-Sep-15.
 */

 /* controls project-add view;
    uses ProjectsFactory for creating a project 
    and EmployeesFactory to get all the employees so the projectManager can be selected; */
chartsApp.controller('AddProjectCtrl', ['$scope','ProjectsFactory', 'EmployeesFactory', '$location', function($scope, ProjectsFactory, EmployeesFactory, $location){
    
   /* function for adding a project */
    $scope.addProject = function () {
        var managerId = $scope.selectManager.id;
        $scope.project.managerId = managerId;

        ProjectsFactory.create($scope.project).$promise.then(function (employee){
            alert("Project added!");
            $location.path('/admin/projects');
        }, function(error){
            alert("Error:  " + error.data);
        });
    };

   /* get all employees;
     if get request fails displays alert*/
    EmployeesFactory.query(function(data){
        $scope.employees = data;
    }, function(error){
        alert("error " + error);
    });

/* ng-click to go back to previous state;
    since only admin can add projects it doesn't check for previous location
    and redirects to projects list view; */
    $scope.cancel = function(){
      $location.path('/admin/projects');
    };

}]);

