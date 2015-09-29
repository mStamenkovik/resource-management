/**
 * Created by Polar Cape on 10-Sep-15.
 */

chartsApp.config(function($stateProvider, $urlRouterProvider){

  //  $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/main-admin.ejs',
            controller: 'SideCtrl'
        })
        .state('admin.employees', {
            url: '/employees',
            templateUrl: 'views/employeesList.ejs',
            controller: 'EmployeeCtrl'
        })
        .state('admin.employee', {
            url: '/employee',
            templateUrl: 'views/employee-add.ejs',
            controller: 'AddEmployeeCtrl'
        })
        .state('admin.projects', {
            url: '/projects',
            templateUrl: 'views/projects.ejs',
            controller: 'ProjectCtrl'
        })
        .state('admin.project', {
            url: '/project',
            templateUrl: 'views/project-add.ejs',
            controller: 'AddProjectCtrl'
        })
        .state('admin.assign', {
            url: '/assign',
            templateUrl: 'views/assignProject.ejs',
            controller: 'AssignCtrl'
        })


});

/*
chartsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/admin/employees', {
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
            when('/admin/project/edit/:id', {
                templateUrl: 'views/project-edit.ejs',
                controller: 'EditProjectCtrl'
            }).
            when('/admin/employee/view/:id', {
                templateUrl: 'views/employee-view.ejs',
                controller: 'ViewEmployeeCtrl'
            }).
            when('/admin/project/view/:id', {
                templateUrl: 'views/project-view.ejs',
                controller: 'ViewProjectCtrl'
            }).
            when('/admin/project', {
                templateUrl: 'views/project-add.ejs',
                controller: 'AddProjectCtrl'
            }).
            when('/admin/assign', {
                templateUrl: 'views/assignProject.ejs',
                controller: 'AssignCtrl'
            }).
            when('/login', {
                templateUrl: 'views/login.ejs',
                controller: 'LoginCtrl'
            }).
            when('/projects', {
                templateUrl: 'views/projects.ejs',
                controller: 'ProjectCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

*/