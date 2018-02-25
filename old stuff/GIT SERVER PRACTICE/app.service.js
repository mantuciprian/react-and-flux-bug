
//angular.module('exampleApp').factory('todoFactory', function () {
 //   var obj = {};
 //   obj.users = ['ion', 'gigel'];
  //  return obj;
//});
angular.module('exampleApp').factory('todoFactory', function () {
    return {
        up: function (input) {
            return input.toUpperCase;
        }
    }
})