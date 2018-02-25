System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CarsService;
    return {
        setters:[],
        execute: function() {
            CarsService = (function () {
                function CarsService() {
                }
                CarsService.prototype.getCars = function () {
                    return ['car1', 'car2', 'car3'];
                };
                return CarsService;
            }());
            exports_1("CarsService", CarsService);
        }
    }
});
//# sourceMappingURL=cars.service.js.map