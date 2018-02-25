angular.module('app', ['ui.router','appp'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('back', {
                url: '/'
            })
            .state('details', {
            url: '/details/:Id',
            templateUrl: 'details.html',
            controller: function ($scope, $stateParams) {
                $scope.player = $scope.bbPlayers[$stateParams.Id];
            }

            })
            

    }])
   

  
    .controller("mainCtrl", function ($scope) {
      
        $scope.bbPlayers = [
            { name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444 },
            { name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374 },
            { name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474 },
            { name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482 }
        ];
        
        $scope.num = function () {

        };
    })
    