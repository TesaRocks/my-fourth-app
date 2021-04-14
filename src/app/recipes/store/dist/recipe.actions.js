"use strict";
exports.__esModule = true;
exports.StoreRecipes = exports.UpdateRecipe = exports.DeleteRecipe = exports.AddRecipe = exports.FetchRecipes = exports.SetRecipes = exports.STORE_RECIPES = exports.DELETE_RECIPE = exports.UPDATE_RECIPE = exports.ADD_RECIPE = exports.FETCH_RECIPES = exports.SET_RECIPES = void 0;
exports.SET_RECIPES = '[Recipes] Set Recipes';
exports.FETCH_RECIPES = '[Recipes] Fetch Recipes';
exports.ADD_RECIPE = '[Recipes] Add Recipe';
exports.UPDATE_RECIPE = '[Recipes] Update Recipe';
exports.DELETE_RECIPE = '[Recipes] Delete Recipe';
exports.STORE_RECIPES = '[Recipes] Store Recipes';
var SetRecipes = /** @class */ (function () {
    function SetRecipes(payload) {
        this.payload = payload;
        this.type = exports.SET_RECIPES;
    }
    return SetRecipes;
}());
exports.SetRecipes = SetRecipes;
var FetchRecipes = /** @class */ (function () {
    function FetchRecipes() {
        this.type = exports.FETCH_RECIPES;
    }
    return FetchRecipes;
}());
exports.FetchRecipes = FetchRecipes;
var AddRecipe = /** @class */ (function () {
    function AddRecipe(payload) {
        this.payload = payload;
        this.type = exports.ADD_RECIPE;
    }
    return AddRecipe;
}());
exports.AddRecipe = AddRecipe;
var DeleteRecipe = /** @class */ (function () {
    function DeleteRecipe(payload) {
        this.payload = payload;
        this.type = exports.DELETE_RECIPE;
    }
    return DeleteRecipe;
}());
exports.DeleteRecipe = DeleteRecipe;
var UpdateRecipe = /** @class */ (function () {
    function UpdateRecipe(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_RECIPE;
    }
    return UpdateRecipe;
}());
exports.UpdateRecipe = UpdateRecipe;
var StoreRecipes = /** @class */ (function () {
    function StoreRecipes() {
        this.type = exports.STORE_RECIPES;
    }
    return StoreRecipes;
}());
exports.StoreRecipes = StoreRecipes;
