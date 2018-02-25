(function () {
    angular.module('appp', [])
    .filter('raining', function () {
        return function (input) {
            return input ? 'sunny' : 'rainny';
        }
    }) }())

