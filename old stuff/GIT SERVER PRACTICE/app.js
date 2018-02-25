angular.module("exampleApp", [])
.controller("defaultCtrl", function ($scope) {
    $scope.message = 'up me';
    $scope.change = function () { $scope.message.value().toUpperCase; };
});
