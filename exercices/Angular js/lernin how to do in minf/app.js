angular.module('app', ['ui.router','ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/templates/main.html',
                controller:'mainCtrl'
            })
    }])

    .controller('mainCtrl', function ($scope) {
        $scope.car='bmw'
    })