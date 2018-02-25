"use strict";
angular.module('app', [])
   
    .controller('myCtrl', function ($scope, addTheCar,$http) {

        $scope.car = addTheCar.sayCar().then(function (response) {
            return response.data.response.results;
        })
        //$scope.addCar = function (input) {$scope.car.push(input) }

        $scope.addCar = addTheCar.addCar;
        $scope.content = $http.get("https://content.guardianapis.com/search?q=debates&api-key=test")
            .then(function (response) {
            return response.data.response.results;
        })
       
       
    })
    .factory('addTheCar', function ($http) {
       
        
        return {
            sayCar: function () {
                return $http.get("https://content.guardianapis.com/search?q=debates&api-key=test")
                   
               
            },
            addCar: function (x) {car.push(x) }
        }

    })
  /*  .filter('upp', function () {
        function upp(x) {
          
            function modified() {

                x = x.split('');
                for (var i = 0; i < x.length; i++) {
                    if (x[i].valueOf() == 'a' || x[i].valueOf() == 'e' || x[i].valueOf() == 'i') {
                        x[i] = x[i].valueOf().toUpperCase();
                        
                    } else if (x[i].valueOf() == 'm' || x[i].valueOf() == 'n' || x[i].valueOf() == 'c') {

                        x[i] = x[i].valueOf() + ' '
                    };
                };
                x = x.join('');
            };
            modified();
            return x;


        }
        
        return upp;
    })
    */