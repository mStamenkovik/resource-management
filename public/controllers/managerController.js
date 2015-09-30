
chartsApp.controller('ManageCtrl', ['$scope', '$location', 'ProjectService', 'ProjectsFactory',
    function($scope, $location, ProjectService, ProjectsFactory){

       ////get managerId
/*        var projects = ProjectService.getProjectsByManagement().$promise.then(function (data){
            $scope.projects = data;
        }, function(error){
            alert("Error:  " + error.data);
        });*/

        $scope.viewProject = function(id){
            $location.path('/employee/project/view/' + id);
        };

        $scope.manageProject = function(id){
            $location.path('/employee/manage/project/' + id);
        };

       $scope.checkIfManagerLoggedIn = function(){
         return true;
       };

        var projects = ProjectsFactory.query().$promise.then(function (data){
            $scope.projects = data;
        }, function(error){
            alert("Error:  " + error.data);
        });

    }]);
