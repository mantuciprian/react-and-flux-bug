System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LibraresService;
    return {
        setters:[],
        execute: function() {
            LibraresService = (function () {
                function LibraresService() {
                }
                LibraresService.prototype.getLibrares = function () {
                    return ['jqerry', 'angular', 'react'];
                };
                return LibraresService;
            }());
            exports_1("LibraresService", LibraresService);
        }
    }
});
//# sourceMappingURL=librares.service.js.map