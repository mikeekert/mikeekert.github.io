const myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: '/views/index.html',
        controller: 'IndexController as ic'
    });
});
