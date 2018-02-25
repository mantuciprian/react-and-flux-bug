System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComputersService;
    return {
        setters:[],
        execute: function() {
            ComputersService = (function () {
                function ComputersService() {
                }
                ComputersService.prototype.getComputers = function () {
                    return ['comp1', 'comp2', 'comp3'];
                };
                return ComputersService;
            }());
            exports_1("ComputersService", ComputersService);
        }
    }
});
//# sourceMappingURL=computers.service.js.map