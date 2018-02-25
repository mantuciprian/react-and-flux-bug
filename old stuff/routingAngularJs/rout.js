angular.module('app', ['ngRoute'])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: "Main.html"
        })
           .when('/BMW', {
               templateUrl: "BMW.html"
           })
        .when('/Mercedes', {
            templateUrl: "Mercedes.html"
        })
      .when('/routTemplate', {
          templateUrl: "routTemplate.html"
      })
  })