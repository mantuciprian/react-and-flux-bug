angular.module('app', []).factory('myJson', function ($http) {
        var promise = $http.get("https://content.guardianapis.com/search?q=debates&api-key=test");
        return {
            getList: function () {
                return promise.then(function (response) {
                    var list = response.data.response;

                    return list; // return full article list
                });
            }
    

        }
}).controller('mycontrol', function ($scope, $http, myJson, myAlert) {
      //  $http.get('https://content.guardianapis.com/search?q=debates&api-key=test')
        //    .success(function(data) {
         //       $scope.proba = data.response.results[0];
           //     $scope.probaa = data.response.results[2];
            //}
        

//)
    myJson.getList().then(function (response) {
        $scope.proba = response;
    });
    $scope.say = myAlert.getLogic();
})