angular.module('app', ['ui.router'])
.filter("checkedItems", function () {
    return function (itm, showComplete) {
        var resultArr = [];
        angular.forEach(itm, function (item) {
            if (item.done == false || showComplete == true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
})
 
 .config(function ($stateProvider) {
     $stateProvider
     .state('bmw', {
         url:'/bmw',
         templateUrl: 'bmw.html',
         controller: 'BmwCtrl',
         factory: 'changePrice',
        
         //controllerAs:'bmwCtrl'
        
     })
     .state('mercedes', {
         url:'/mercedes',
         templateUrl: "mercedes.html",
        // controller: 'BmwCtrl'
     })
     
 })
   
.controller('BmwCtrl', function ($scope) {
    $scope.parts = [{ part: 'Engine', price: 1200},
       { part: 'Exhaust', price: 1000 },
         { part: 'transmision', price:800}
    ]
    $scope.carPrice = 45000;
    
   
    
})
.factory('addItm', function () {
    var content = $scope.itm;
    return {
        newitm: function (x) {
            return content.push({ 'action': x, 'done': false })

        }
    }
})
.controller('dou', function ($scope,$http) {
    $http.get('todo.json').then(function (response) {
        $scope.itm = response.data
    })
    //$scope.addItm = function (x) {
      //  $scope.itm.push({ 'action': x, 'done': false });

    //}
    $scope.addItm = function () {addItm.newitm };
  
})
