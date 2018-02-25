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

                controller:function ($scope, $stateParams) {
                     $scope.bbPlayers = [
                         { name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444 },
                         { name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374 },
                         { name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474 },
                         { name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482 }
                     ];
                    $scope.player = $scope.bbPlayers[$stateParams.Id];

                }
                    
            });
     
            

    }])
    

  
    .controller("mainCtrl", function ($scope) {
      
        $scope.bbPlayers = [
            { name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444 },
            { name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374 },
            { name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474 },
            { name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482 }
        ];
        
        $scope.add = function (Name, Avg, Hr, Obp) {
            $scope.bbPlayers.push({ name: Name, avg: Avg, hr: Hr, obp: Obp })

        };
    })
