angular.module('app', ['ui.router', 'ui.bootstrap'])
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
    .controller("mainCtrl", function ($scope, myDate, sections, $stateParams) {
       
        $scope.infos = sections;
        $scope.pageSize = 4;
        $scope.currentPage = 1;
       
        
        
    })
    .controller('detailCtrl', function ($scope, $stateParams, sections) {
       
        $scope.title = sections[$stateParams.Id].webTitle;
        $scope.link = sections[$stateParams.Id].webUrl;
        $scope.webPublication = sections[$stateParams.Id].webPublicationDate;
        $scope.sectionName = sections[$stateParams.Id].sectionName;

    })
    .filter('startFrom', function () {
        return function (data, start) {
            return data.slice(start)
        }

    })
