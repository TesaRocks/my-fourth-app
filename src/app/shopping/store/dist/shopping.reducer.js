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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.shoppingReducer = void 0;
var ingredient_model_1 = require("../../shared/ingredient.model");
var ShoppingActions = require("./shopping.actions");
var initialState = {
    ingredients: [new ingredient_model_1.Ingredient('apples', 10), new ingredient_model_1.Ingredient('banana', 2)]
};
function shoppingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ShoppingActions.ADD_INGREDIENT:
            return __assign(__assign({}, state), { ingredients: __spreadArrays(state.ingredients, [action.payload]) });
        case ShoppingActions.ADD_INGREDIENTS:
            return __assign(__assign({}, state), { ingredients: __spreadArrays(state.ingredients, action.payload) });
        default:
            return state;
    }
}
exports.shoppingReducer = shoppingReducer;
