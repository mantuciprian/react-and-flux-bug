angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/templates/main.html',
                controller: 'mainCtrl',
                resolve: {
                    sections: ['$http', '$stateParams', 'myDate', function ($http, $stateParams, myDate) {
                        return myDate.getList();
                    }]
                }

            })
            .state('details', {
                url: '/details/:Id',
                templateUrl: '/templates/details.html',
                controller: 'detailCtrl',
                resolve: {
                    sections: ['$http', '$stateParams', 'myDate', function ($http, $stateParams, myDate) {
                        return myDate.getList();
                    }]
                }
                    

                });

    }])
    .controller("mainCtrl", function ($scope, myDate, sections) {
       
        $scope.infos = sections;
    })
    .controller('detailCtrl', function ($scope, $stateParams, sections) {
        $scope.title = sections.results[$stateParams.Id].webTitle;
        $scope.link = sections.results[$stateParams.Id].webUrl;
        $scope.webPublication = sections.results[$stateParams.Id].webPublicationDate;
        $scope.sectionName = sections.results[$stateParams.Id].sectionName;

    })
