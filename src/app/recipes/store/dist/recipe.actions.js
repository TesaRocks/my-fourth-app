"use strict";
exports.__esModule = true;
exports.SetRecipes = exports.SET_RECIPES = void 0;
exports.SET_RECIPES = '[Recipes] Set Recipes';
var SetRecipes = /** @class */ (function () {
    function SetRecipes(payload) {
        this.payload = payload;
        this.type = exports.SET_RECIPES;
    }
    return SetRecipes;
}());
exports.SetRecipes = SetRecipes;
