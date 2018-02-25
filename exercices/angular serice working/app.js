angular.module('myApp', [])
    .factory('myserv', function () {
    var name = 'gica';
    return {
        getName: function () {
            return name;
        }
    }
    })
    .factory('triple', function () {
        var number=function (x) { return x * 5 };
        return {
            getTriple: function () {
                return number 
            }
        }
    })
    .controller('recap', function ($scope, myserv, triple) {
        $scope.greeting = 'hi';
        $scope.double = function (x) { return x * x };
        $scope.name = myserv.getName();
        $scope.triple = triple.getTriple();

       
    })