/**
 * Created by Polar Cape on 10-Sep-15.
 */

chartsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/admin/employeeslist', {
                templateUrl: 'views/employeesList.ejs',
                controller: 'EmployeeCtrl'
            }).
            when('/admin/employee/edit/:id', {
                templateUrl: 'views/employee-edit.ejs',
                controller: 'EditEmployeeCtrl'
            }).
            when('/admin/employee', {
                templateUrl: 'views/employee-add.ejs',
                controller: 'AddEmployeeCtrl'
            }).
            when('/admin/projects', {
                templateUrl: 'views/projects.ejs',
                controller: 'ProjectCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);