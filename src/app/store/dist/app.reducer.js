"use strict";
exports.__esModule = true;
exports.appReducer = void 0;
var fromShopping = require("../shopping/store/shopping.reducer");
var fromAuth = require("../auth/store/auth.reducer");
var fromRecipes = require("../recipes/store/recipe.reducer");
exports.appReducer = {
    shopping: fromShopping.shoppingReducer,
    auth: fromAuth.authReducer,
    recipes: fromRecipes.recipeReducer
};
