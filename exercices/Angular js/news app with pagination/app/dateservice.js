angular.module('app')
    .factory('myDate', function ($http) {
        var promise = $http.get("https://content.guardianapis.com/search?q=debates&api-key=test");
        return {
            getList: function () {
                return promise.then(function (response) {
                    var list = response.data.response.results;
                    return list;
                })
            }
        }

    })