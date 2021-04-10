"use strict";
exports.__esModule = true;
exports.Addingredients = exports.AddIngredient = exports.ADD_INGREDIENTS = exports.ADD_INGREDIENT = void 0;
exports.ADD_INGREDIENT = 'ADD_INGREDIENT';
exports.ADD_INGREDIENTS = 'ADD_INGEDIENTS';
var AddIngredient = /** @class */ (function () {
    function AddIngredient(payload) {
        this.payload = payload;
        this.type = exports.ADD_INGREDIENT;
    }
    return AddIngredient;
}());
exports.AddIngredient = AddIngredient;
var Addingredients = /** @class */ (function () {
    function Addingredients(payload) {
        this.payload = payload;
        this.type = exports.ADD_INGREDIENTS;
    }
    return Addingredients;
}());
exports.Addingredients = Addingredients;
