angular.module('app', [])
    .controller('mainCtrl', function ($scope, $http) {
        $http.get('content.json').then(function (response) {
            $scope.car = response.data.masina1

        })
         

    })