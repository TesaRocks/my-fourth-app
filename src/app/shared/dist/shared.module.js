"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var dropdown_directive_1 = require("./dropdown.directive");
var loading_component_1 = require("./loading-spinner/loading.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [dropdown_directive_1.DropdownDirective, loading_component_1.LoadingSpinner],
            imports: [common_1.CommonModule],
            exports: [dropdown_directive_1.DropdownDirective, loading_component_1.LoadingSpinner, common_1.CommonModule]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
