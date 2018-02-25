"use strict";
angular.module('app', ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: "/home.html",
                controller: "homeCtrl",
                resolve: {
                    sections: ['$http', 'myDate', function ($http,myDate) {
                        return myDate.getList();
                    }]
                }
               

            })

    }])
    .controller('homeCtrl', function ($scope,sections) {
       
       $scope.title = sections.results[1].webTitle;
    })
    .factory('myDate', function ($http) {
        var promise = $http.get("https://content.guardianapis.com/search?q=debates&api-key=test");
        return {
            getList: function () {
                return promise.then(function (response) {
                    var list = response.data.response;
                    return list;
                })
            }
        }

    })
$('#demo').hover(function () {
    $(this).css('color','red');
});
$('#imp').blur(function () {
$(this).css('background-color','aqua')
})
$('.dropbtn').click(function () {
$('.dropcont').slideToggle(2000)

})
$('#btn').click(function () {
$('.cont').before('<p>atached text</p>')

})
$('#loadcont').load('https://content.guardianapis.com/search?q=debates&api-key=test "status"', function (response, status, xhr) {
    console.log(response);

});
$('#clickme').click(function () {
    $('.dropcont').slideToggle(1000);

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
.controller('parentCtrl', function ($scope,$rootScope) {
        $scope.bike = 'kawasaki';
        $rootScope.phone = 'samsung';

    })
    */