/**
 * Created by Polar Cape on 16-Sep-15.
 */
 /* Edit and View Project controller*/

/* edits project*/
chartsApp.controller('EditProjectCtrl', ['$scope','ProjectFactory', 'EmployeeFactory', 'EmployeesFactory', '$location','$stateParams',
       function($scope, ProjectFactory, EmployeeFactory, EmployeesFactory, $location, $stateParams){
    
    /* ng-click 'updateProject';
       the function doesn't check what fields are changed;
       it updates the entire object
     */
    $scope.updateProject = function () {
        var managerId = $scope.selectManager.id;
        $scope.project.managerId = managerId;

        ProjectFactory.update($scope.project).$promise.then(function (data){
            $location.path('/admin/projects');
        }, function(error){
            alert("Error:  " + error.data);
        });
    };
   
       /* gets employees for the selection of project manager;

          TODO: select dropdown does not have initail value !!! */
       EmployeesFactory.query(function(data){
           $scope.employees = data;
       }, function(error){
           alert("error " + error);
       });



     /* ng-click to go back to previous state;
    since only admin can edit the project list it doesn't check for previous location
    and redirects to project list view; */
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

/* view project */
chartsApp.controller('ViewProjectCtrl', ['$scope','ProjectFactory', 'ProjectService', '$location', '$stateParams', 
   function($scope, ProjectFactory, ProjectService, $location, $stateParams){

    
     /* ng-click to go back to previous state;
        project is available to both admin and employees, therefore the $location.path is checked
        and the appropriate redirect is made;

        TODO: use states */
    $scope.cancel = function () {
      var part = $location.path().split(/[\s/]+/)[1];
          if(part == 'admin'){
                 $location.path('/admin/projects');
            }
            else {
               $location.path('/employee/projects');
            }
    };

     /* get the project with given id;
         on success: tries to get the effort for the project i.e. gets employees names, working dates for each employee, 
                      their role, working hours etc. if it fails alert is displayed
         on error: alert*/
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

