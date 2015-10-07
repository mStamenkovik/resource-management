/**
 * Created by Polar Cape on 10-Sep-15.
 */

chartsApp.config(function($stateProvider, $urlRouterProvider){

  //  $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin-sidebar.html',
            controller: 'SideCtrl'
        })
        .state('admin.employees', {
            url: '/employees',
            templateUrl: 'views/employeesList.html',
            controller: 'EmployeeCtrl'
        })
        .state('admin.employee', {
            url: '/employee',
            templateUrl: 'views/employee-add.html',
            controller: 'AddEmployeeCtrl'
        })
            /* Admin > View Employee */
        .state('admin.viewEmployee', {
            url: '/employee/view/:id',
            templateUrl: 'views/employee-view.html',
            controller: 'ViewEmployeeCtrl'
        })

            /* Admin > Edit Employee */
        .state('admin.editEmployee', {
            url:'/employee/edit/:id',
            templateUrl:'views/employee-edit.html',
            controller: 'EditEmployeeCtrl'
        })

        .state('admin.projects', {
            url: '/projects',
            templateUrl: 'views/projects.html',
            controller: 'ProjectCtrl'
        })
        .state('admin.project', {
            url: '/project',
            templateUrl: 'views/project-add.html',
            controller: 'AddProjectCtrl'
        })
        /* Admin > View Project */
        .state('admin.viewProject', {
            url: '/project/view/:id',
            templateUrl: 'views/project-view.html',
            controller: 'ViewProjectCtrl'
        })

        /* Admin > Edit Project */
        .state('admin.editProject', {
            url:'/project/edit/:id',
            templateUrl:'views/project-edit.html',
            controller: 'EditProjectCtrl'
        })
        .state('admin.assign', {
            url: '/assign',
            templateUrl: 'views/assignProject.html',
            controller: 'AssignCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .state('employee', {
            url: '/employee',
            templateUrl: 'views/employee-sidebar.html',
            controller: 'SideCtrl'
        })
        .state('employee.manage', {
            url: '/manage',
            templateUrl: 'views/projects.html',
            controller: 'ManageCtrl'
        })
        .state('employee.manageProject', {
            url: '/manage/project/:id',
            templateUrl: 'views/manageProject.html',
            controller: 'ManageProjectCtrl'
        })
        .state('employee.viewProject', {
            url: '/project/view/:id',
            templateUrl: 'views/project-view.html',
            controller: 'ViewProjectCtrl'
        })
        /*.state('employee.projects', {
            url: '/employee/projects',
            templateUrl: 'views/login.ejs',
            controller: 'LoginCtrl'
        })*/

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

