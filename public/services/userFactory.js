/**
 * Created by Polar Cape on 16-Sep-15.
 */
chartsApp.factory('UserFactory', function ($resource) {
    return $resource('/api/user/authenticate', {}, {
        authenticate: { method: 'POST' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});