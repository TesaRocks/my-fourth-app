"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthGuard = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, router) {
        var _this = this;
        //return this.authService.user.pipe(
        return this.store.select('auth').pipe(operators_1.take(1), operators_1.map(function (authState) {
            return authState.user;
        }), operators_1.map(function (user) {
            var isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return _this.router.createUrlTree(['/auth']);
        }));
    };
    AuthGuard = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
