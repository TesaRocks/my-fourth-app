"use strict";
exports.__esModule = true;
exports.Logout = exports.Login = exports.LOGOUT = exports.LOGIN = void 0;
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
