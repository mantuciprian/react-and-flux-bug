angular.module('app')
.factory('myAlert', function () {
    var logic = function (x) {
        if (x == x.toUpperCase()) {
            alert('upper')
        }
    }
    return {
        getLogic: function () {
            return logic;
        }
    }

})