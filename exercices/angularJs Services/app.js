angular.module('app', [])
   
  /*  .factory('stringService', function () {
       return {
            processString: function (input) {
                if (!input) { return input }
                var output = '';

                for (var i = 0; i < input.length; i++) {
                    if (i > 0 && input[i] == input[i].toUpperCase()) {
                        output = output + '-';
                    }
                    output = output + input[i];

                }
                return output;


            }
        };
    })*/
    
     .factory('todoService', function ($http) {
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
 .controller('ctrl', function ($scope, $http, todoService) {
   // $http.get("todo.json").then(function (response) {
     //    $scope.message = response.data;
     //});
    
     $scope.message = [];
     todoService.getList().then(function (data) {
         $scope.message = data;
     })
     
 })