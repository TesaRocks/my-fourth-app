"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var AuthActions = require("../auth/store/auth.actions");
var RecipesActions = require("../recipes/store/recipe.actions");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService, authService, store) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.store = store;
        this.isAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.store
            .select('auth')
            .pipe(operators_1.map(function (authState) { return authState.user; }))
            .subscribe(function (user) {
            //this.userSub = this.authService.user.subscribe((user) => {
            _this.isAuthenticated = !user ? false : true;
        });
    };
    HeaderComponent.prototype.onSave = function () {
        //this.dataStorageService.storeRecipes();
        this.store.dispatch(new RecipesActions.StoreRecipes());
    };
    HeaderComponent.prototype.onFetch = function () {
        this.dataStorageService.fetchRecipes().subscribe();
        //this.store.dispatch(new RecipesActions.FetchRecipes());
    };
    HeaderComponent.prototype.onLogout = function () {
        //this.authService.logout();
        this.store.dispatch(new AuthActions.Logout());
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html'
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
