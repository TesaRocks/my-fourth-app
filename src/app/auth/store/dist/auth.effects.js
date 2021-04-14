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
var user_model_1 = require("../user.model");
var handleAuthentication = function (expiresIn, email, userId, token) {
    var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    var user = new user_model_1.User(email, userId, token, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
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
    function AuthEffects(actions$, http, router, authService) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.authSignup = this.actions$.pipe(effects_1.ofType(AuthActions.SIGNUP_START), operators_1.switchMap(function (signupAction) {
            return _this.http
                .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                environment_1.environment.firebaseApiKey, {
                email: signupAction.payload.email,
                password: signupAction.payload.password,
                returnSecureToken: true
            })
                .pipe(operators_1.tap(function (resData) {
                _this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }), operators_1.map(function (resData) {
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
                .pipe(operators_1.tap(function (resData) {
                _this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }), operators_1.map(function (resData) {
                return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
            }), operators_1.catchError(function (errorRes) {
                return handleError(errorRes);
            }));
        }));
        this.authRedirect = this.actions$.pipe(effects_1.ofType(AuthActions.AUTHENTICATE_SUCCESS), operators_1.tap(function () {
            _this.router.navigate(['/']);
        }));
        this.autoLogin = this.actions$.pipe(effects_1.ofType(AuthActions.AUTO_LOGIN), operators_1.map(function () {
            var userData = JSON.parse(localStorage.getItem('userData'));
            if (!userData) {
                return { type: 'DUMMY' };
            }
            var loadedUser = new user_model_1.User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
            if (loadedUser.token) {
                //this.user.next(loadedUser);
                var expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                    new Date().getTime();
                _this.authService.setLogoutTimer(expirationDuration);
                return new AuthActions.AuthenticateSuccess({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    expirationDate: new Date(userData._tokenExpirationDate)
                });
                // const expirationDuration =
                //   new Date(userData._tokenExpirationDate).getTime() -
                //   new Date().getTime();
                // this.autoLogout(expirationDuration);
            }
            return { type: 'DUMMY' };
        }));
        this.authLogout = this.actions$.pipe(effects_1.ofType(AuthActions.LOGOUT), operators_1.tap(function () {
            _this.authService.clearLogoutTimer();
            localStorage.removeItem('userData');
            _this.router.navigate(['/auth']);
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
    ], AuthEffects.prototype, "authRedirect");
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "autoLogin");
    __decorate([
        effects_1.Effect({ dispatch: false })
    ], AuthEffects.prototype, "authLogout");
    AuthEffects = __decorate([
        core_1.Injectable()
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
