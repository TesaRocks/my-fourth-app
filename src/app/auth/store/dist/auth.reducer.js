"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.authReducer = void 0;
var user_model_1 = require("../user.model");
var AuthActions = require("./auth.actions");
var initialState = {
    user: null
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActions.LOGIN:
            var user = new user_model_1.User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return __assign(__assign({}, state), { user: user });
        case AuthActions.LOGOUT:
            return __assign(__assign({}, state), { user: null });
        default:
            return state;
    }
}
exports.authReducer = authReducer;
