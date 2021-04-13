"use strict";
exports.__esModule = true;
exports.AuthEffects = void 0;
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../../environments/environment");
var AuthActions = require("./auth.actions");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, http) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.authLogin = this.actions$.pipe(effects_1.ofType(AuthActions.LOGIN_START), operators_1.switchMap(function (authData) {
            return _this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                environment_1.environment.firebaseApiKey, {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
            });
        }));
    }
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
