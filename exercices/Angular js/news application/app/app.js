angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/templates/main.html',
                controller: 'mainCtrl'

            })
            .state('details', {
                url: '/details/:Id',
                templateUrl: '/templates/details.html',

                controller: function ($scope, $stateParams, myDate) {
                    myDate.getList().then(function (response) {
                        $scope.title = response.results[$stateParams.Id].webTitle;
                        $scope.link = response.results[$stateParams.Id].webUrl;
                        $scope.webPublication = response.results[$stateParams.Id].webPublicationDate;
                        $scope.sectionName = response.results[$stateParams.Id].sectionName;
                    })

                  
                }
                    

                }
                    
            );
     
            

    }])
    

  
    .controller("mainCtrl", function ($scope, myDate) {
       
        myDate.getList().then(function (response) {
            $scope.myData = response;
            
        })
        
    })
