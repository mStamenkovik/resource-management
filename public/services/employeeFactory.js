/**
 * Created by Polar Cape on 10-Sep-15.
 */

//factory for adding an employee and getting all the list of all employees
chartsApp.factory('EmployeesFactory', function ($resource) {
    return $resource('http://10.10.20.84:8080/data/employees', {}, {
        query: { method: 'GET',
                 isArray: true
                },
        create: { method: 'POST' }
    })
});

//factory for getting an employee by id, updating an employee and deleting(setting valid bit to 0)
chartsApp.factory('EmployeeFactory', function ($resource) {

    return $resource('http://10.10.20.84:8080/data/employees/:id', {}, {
        show: { method: 'GET', isArray: false },
        update: { method: 'PUT'
                    /*,headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    }*/
            ,params: {id: '@id'}
        },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

