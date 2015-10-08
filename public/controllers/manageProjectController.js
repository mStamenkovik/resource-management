/**
 * Created by Polar Cape on 30-Sep-15.
 */
chartsApp.controller('ManageProjectCtrl', ['$scope', 'ProjectFactory', 'EmployeesFactory', 'ProjectAssignFactory', 'ProjectService', '$stateParams',
       function($scope, ProjectFactory, EmployeesFactory, ProjectAssignFactory, ProjectService, $stateParams){

    //variable to store all efforts from the table
    var effort = [];
    $scope.effort = effort;
    $scope.editEffort = [];

    //roles that can be assigned to project - get an array??
    $scope.roles = [
        {
            name: 'Backend',
            value: 'ROLE_BACKEND'
        },
        {
            name: 'Frontend',
            value: 'ROLE_FRONTEND'
        },
        {
            name: 'Designer',
            value: 'ROLE_DESIGNER'
        }];


    var project = ProjectFactory.show({id: $stateParams.id}).$promise.then(function(data){
     $scope.project = data;
     $scope.project.fromDate = new Date(data.fromDate);
     $scope.project.toDate = new Date(data.toDate);
        $scope.assignedEmployees = ProjectService.getEffortForProject($scope.project.id);  //////////////////////////promiseeeee
     }, function(error){
     alert("Error");
     });

    EmployeesFactory.query(function(data){
        $scope.employees = data;

    }, function(error){
        alert("error " + error);
    });



    $scope.addEmployee = function(){
        var selectedEmployee = $scope.selectEmployee;
        var jobPosition = $scope.selectProjectRole.value;
        var workingHours = $scope.workingHours;
        var from = $scope.fromDate;
        var to = $scope.toDate;

        var eff = {
            employee: selectedEmployee,
            effortInformation: {
                role : jobPosition,
                percent : workingHours,
                fromDate : from,
                toDate : to
            }
        };

        $scope.effort.push(eff);
    };

    $scope.removeEmployee = function(index){
        $scope.effort.splice(index, 1);
    };

     $scope.saveTeam = function(){
         angular.forEach(effort, function(value, key){
             ProjectAssignFactory.update({id: $scope.project.id, employeeId: value.employee.id}, value.effortInformation).$promise.then(function (data){
                alert("ok");
             }, function(error){
                 alert("Error:  " + error.data);
             });
         });
     };

}]);

/*
chartsApp.directive('inlineEdit', function($timeout) {
    return {
        scope: {
            model: '=inlineEdit',
            handleSave: '&onSave',
            handleCancel: '&onCancel'
        },
        link: function(scope, elm, attr) {
            var previousValue;

            scope.edit = function() {
                scope.editMode = true;
                previousValue = scope.model;

                $timeout(function() {
                    elm.find('input')[0].focus();
                }, 0, false);
            };
            scope.save = function() {
                scope.editMode = false;
                scope.handleSave({value: scope.model});
            };
            scope.cancel = function() {
                scope.editMode = false;
                scope.model = previousValue;
                scope.handleCancel({value: scope.model});
            };
        }
    };
});*/
