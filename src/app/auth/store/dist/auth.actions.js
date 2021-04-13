"use strict";
exports.__esModule = true;
exports.SignupStart = exports.AuthenticateFail = exports.LoginStart = exports.Logout = exports.AuthenticateSuccess = exports.LOGOUT = exports.SIGNUP_START = exports.AUTHENTICATE_FAIL = exports.AUTHENTICATE_SUCCESS = exports.LOGIN_START = void 0;
exports.LOGIN_START = '[Auth] Login Start';
exports.AUTHENTICATE_SUCCESS = '[Auth] Login';
exports.AUTHENTICATE_FAIL = '[Auth] Login Fail';
exports.SIGNUP_START = '[Auth] Signup Start';
exports.LOGOUT = '[Auth] Logout';
var AuthenticateSuccess = /** @class */ (function () {
    function AuthenticateSuccess(payload) {
        this.payload = payload;
        this.type = exports.AUTHENTICATE_SUCCESS;
    }
    return AuthenticateSuccess;
}());
exports.AuthenticateSuccess = AuthenticateSuccess;
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = exports.LOGOUT;
    }
    return Logout;
}());
exports.Logout = Logout;
var LoginStart = /** @class */ (function () {
    function LoginStart(payload) {
        this.payload = payload;
        this.type = exports.LOGIN_START;
    }
    return LoginStart;
}());
exports.LoginStart = LoginStart;
var AuthenticateFail = /** @class */ (function () {
    function AuthenticateFail(payload) {
        this.payload = payload;
        this.type = exports.AUTHENTICATE_FAIL;
    }
    return AuthenticateFail;
}());
exports.AuthenticateFail = AuthenticateFail;
var SignupStart = /** @class */ (function () {
    function SignupStart(payload) {
        this.payload = payload;
        this.type = exports.SIGNUP_START;
    }
    return SignupStart;
}());
exports.SignupStart = SignupStart;
