/**
 * Created by Polar Cape on 10-Sep-15.
 */
var path = "http://localhost:8080";

chartsApp.factory('EffortFactory', function ($resource) {

    return $resource(path + '/data/efforts/:id', {}, {
        /*show: { method: 'GET' },
        update: { method: 'PUT'
                    ,headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    }
            ,params: {id: '@id'}
        },*/
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

