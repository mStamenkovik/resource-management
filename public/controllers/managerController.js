
chartsApp.controller('ManageCtrl', ['$scope', '$location', 'ProjectService', 'ProjectsFactory', 'UserService',
    function($scope, $location, ProjectService, ProjectsFactory, UserService){

          UserService.getEmployeeByUserId().$promise.then(function (data){
              var manager = data;
              ProjectService.getProjectsByManagement(manager.id).$promise.then(function (data){
                 $scope.projects = data;
             }, function(error){
                 alert("Error:  " + error.data);
             });

         }, function(error){
             alert("Error:  " + error.data);
         });

        $scope.viewProject = function(id){
            $location.path('/employee/project/view/' + id);
        };

        $scope.manageProject = function(id){
            $location.path('/employee/manage/project/' + id);
        };

       $scope.checkIfManagerLoggedIn = function(){
         return true;
       };

       /* var projects = ProjectsFactory.query().$promise.then(function (data){
            $scope.projects = data;
        }, function(error){
            alert("Error:  " + error.data);
        });
*/
    }]);
