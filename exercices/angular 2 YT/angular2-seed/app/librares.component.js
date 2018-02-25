System.register(['angular2/core', './librares.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, librares_service_1;
    var LibraresComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (librares_service_1_1) {
                librares_service_1 = librares_service_1_1;
            }],
        execute: function() {
            LibraresComponent = (function () {
                function LibraresComponent(libraresService) {
                    this.librares = libraresService.getLibrares();
                }
                LibraresComponent = __decorate([
                    core_1.Component({
                        selector: 'librares',
                        template: "\n<h2>Librares</h2>\n<ul>\n<li *ngFor='#library of librares'>{{library}}\n</li>\n</ul>\n\n",
                        providers: [librares_service_1.LibraresService]
                    }), 
                    __metadata('design:paramtypes', [librares_service_1.LibraresService])
                ], LibraresComponent);
                return LibraresComponent;
            }());
            exports_1("LibraresComponent", LibraresComponent);
        }
    }
});
//# sourceMappingURL=librares.component.js.map