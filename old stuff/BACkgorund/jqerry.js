angular.module('myapp', [])
    .factory('changeMessage', function () {

       var message = 'Other thing';
       
	 return {
            newMessage: function () {
              return  message;
            }
        }

    })
.controller('myCtrl', function ($scope, changeMessage) {
  
  $scope.message = 'something';
  $scope.otherMessage = function(){

$scope.message = changeMessage.newMessage();
};



//changeMessage.newMessage;  
})