"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var AuthActions = require("./store/auth.actions");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeSub = this.store.select('auth').subscribe(function (authState) {
            _this.isLoading = authState.loading;
            _this.error = authState.authError;
        });
    };
    AuthComponent.prototype.onSwitchMode = function () {
        this.isLoginMode = !this.isLoginMode;
    };
    AuthComponent.prototype.onSubmit = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        //let authObs: Observable<AuthResponseData>;
        //this.isLoading = true;
        if (this.isLoginMode) {
            // authObs = this.authService.login(email, password);
            this.store.dispatch(new AuthActions.LoginStart({ email: email, password: password }));
        }
        else {
            //authObs = this.authService.signup(email, password);
            this.store.dispatch(new AuthActions.SignupStart({ email: email, password: password }));
        }
        // authObs.subscribe(
        //   (resData) => {
        //     this.isLoading = false;
        //     this.router.navigate(['/recipes']);
        //   },
        //   (errorMessage) => {
        //     this.isLoading = false;
        //     this.error = errorMessage;
        //   }
        // );
        form.reset();
    };
    AuthComponent.prototype.ngOnDestroy = function () {
        this.storeSub.unsubscribe();
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html'
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
