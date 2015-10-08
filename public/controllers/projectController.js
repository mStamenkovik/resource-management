/**
 * Created by Polar Cape on 11-Sep-15.
 */
chartsApp.controller('ProjectCtrl', ['$scope','ProjectsFactory', '$location', 'ProjectFactory','$rootScope',
         function($scope, ProjectsFactory, $location, ProjectFactory, $rootScope){

    $scope.tab = 1;

    $scope.checkIfAdminLoggedIn = function(){
        if(angular.isDefined(sessionStorage.token)){
             if(angular.isDefined(sessionStorage.userRole)){
                  if(sessionStorage.userRole == "ROLE_ADMIN"){
                      return true;
                  }
                 else {
                      return false;
                  }
             }
            else {
                 return false;
             }
        }
        else {
            return false;
        }
    };

    $scope.checkIfManagerLoggedIn  = function(){
         return false;
    };

    $scope.isTabSelected = function (checkTab){
        return $scope.tab == checkTab;
    };



    ////depends on project status ??? filter status to display; !!!$index var in ng-repeat changes!!!
             /*  $scope.selectTab = function(selectTab){
          $scope.tab = selectTab;
        if(selectTab == 1){
            var projects = ProjectsFactory.query().$promise.then(function (data){
                $scope.projects = data;
            }, function(error){
                alert("Error:  " + error.data);
            });
        }
        else if(selectTab == 2){
            var projects = ProjectService.getProjectsByCompletition(0).$promise.then(function (data){
                $scope.projects = data;
            }, function(error){
                alert("Error:  " + error.data);
            });
        }
        else if(selectTab == 3){
            var projects = ProjectService.getProjectsByCompletition(1).$promise.then(function (data){
                $scope.projects = data;
            }, function(error){
                alert("Error:  " + error.data);
            });
        }
    };*/

    $scope.removeProject = function(id, index){
        var result = confirm("Are you sure you want to delete the project?");
        if(result) {
            ProjectFactory.delete({ id: id }).$promise.then(function (data){
                $scope.projects.splice(index, 1);
            }, function(error){
                alert("Error:  " + error.data);
            });
        }
    };

    $scope.editProject = function(id){
        $location.path('/admin/project/edit/' + id);
    };

    $scope.viewProject = function(id){
        $location.path('/admin/project/view/' + id);
    };

    var projects = ProjectsFactory.query().$promise.then(function (data){
          $scope.projects = data;
    }, function(error){
        alert("Error:  " + error.data);
    });
}]);