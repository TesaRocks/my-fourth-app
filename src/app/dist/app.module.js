"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var http_1 = require("@angular/common/http");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core.module");
var store_1 = require("@ngrx/store");
var fromApp = require("./store/app.reducer");
var effects_1 = require("@ngrx/effects");
var auth_effects_1 = require("./auth/store/auth.effects");
var store_devtools_1 = require("@ngrx/store-devtools");
var environment_1 = require("../environments/environment");
var router_store_1 = require("@ngrx/router-store");
var recipe_effects_1 = require("./recipes/store/recipe.effects");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'serverApp' }),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                store_1.StoreModule.forRoot(fromApp.appReducer),
                effects_1.EffectsModule.forRoot([auth_effects_1.AuthEffects, recipe_effects_1.RecipeEffects]),
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                store_devtools_1.StoreDevtoolsModule.instrument({ logOnly: environment_1.environment.production }),
                router_store_1.StoreRouterConnectingModule.forRoot(),
                animations_1.BrowserAnimationsModule,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
