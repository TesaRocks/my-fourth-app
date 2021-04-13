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
    user: null,
    authError: null,
    loading: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActions.AUTHENTICATE_SUCCESS:
            var user = new user_model_1.User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return __assign(__assign({}, state), { authError: null, user: user, loading: false });
        case AuthActions.LOGOUT:
            return __assign(__assign({}, state), { user: null });
        case AuthActions.LOGIN_START:
            return __assign(__assign({}, state), { authError: null, loading: true });
        case AuthActions.AUTHENTICATE_FAIL:
            return __assign(__assign({}, state), { user: null, authError: action.payload, loading: false });
        default:
            return state;
    }
}
exports.authReducer = authReducer;
