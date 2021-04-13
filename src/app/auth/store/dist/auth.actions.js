"use strict";
exports.__esModule = true;
exports.LoginStart = exports.Logout = exports.Login = exports.LOGOUT = exports.LOGIN = exports.LOGIN_START = void 0;
exports.LOGIN_START = '[Auth] Login Start';
exports.LOGIN = '[Auth] Login';
exports.LOGOUT = '[Auth] Logout';
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = exports.LOGIN;
    }
    return Login;
}());
exports.Login = Login;
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
