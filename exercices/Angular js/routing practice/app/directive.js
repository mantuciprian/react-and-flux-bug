angular.module('appp', [ ])
.directive('myDir', function () {
    return {
        scope: {
            message: '='
        },
        template: '<h2>this is a directive</h2><br>{{message.name}}'

    }

})