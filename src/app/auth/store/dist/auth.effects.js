"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../../environments/environment");
var AuthActions = require("./auth.actions");
var handleAuthentication = function (expiresIn, email, userId, token) {
    var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    return new AuthActions.AuthenticateSuccess({
        email: email,
        userId: userId,
        token: token,
        expirationDate: expirationDate
    });
};
var handleError = function (errorRes) {
    var errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
        return rxjs_1.of(new AuthActions.AuthenticateFail(errorMessage));
    }
    switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
            break;
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email does not exist.';
            break;
        case 'INVALID_PASSWORD':
            errorMessage = 'This password is not correct.';
            break;
    }
    return rxjs_1.of(new AuthActions.AuthenticateFail(errorMessage));
};
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, http, router) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.authSignup = this.actions$.pipe(effects_1.ofType(AuthActions.SIGNUP_START), operators_1.switchMap(function (signupAction) {
            return _this.http
                .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                environment_1.environment.firebaseApiKey, {
                email: signupAction.payload.email,
                password: signupAction.payload.password,
                returnSecureToken: true
            })
                .pipe(operators_1.map(function (resData) {
                return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
            }), operators_1.catchError(function (errorRes) {
                return handleError(errorRes);
            }));
        }));
        this.authLogin = this.actions$.pipe(effects_1.ofType(AuthActions.LOGIN_START), operators_1.switchMap(function (authData) {
            return _this.http
                .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
                environment_1.environment.firebaseApiKey, {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
            })
                .pipe(operators_1.map(function (resData) {
                return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
            }), operators_1.catchError(function (errorRes) {
                return handleError(errorRes);
            }));
        }));
        this.authSuccess = this.actions$.pipe(effects_1.ofType(AuthActions.AUTHENTICATE_SUCCESS), operators_1.tap(function () {
            _this.router.navigate(['/']);
        }));
    }
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "authSignup");
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "authLogin");
    __decorate([
        effects_1.Effect({ dispatch: false })
    ], AuthEffects.prototype, "authSuccess");
    AuthEffects = __decorate([
        core_1.Injectable()
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
