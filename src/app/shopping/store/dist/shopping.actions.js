"use strict";
exports.__esModule = true;
exports.StopEdit = exports.StartEdit = exports.DeleteIngredient = exports.UpdateIngredient = exports.Addingredients = exports.AddIngredient = exports.STOP_EDIT = exports.START_EDIT = exports.DELETE_INGREDIENT = exports.UPDATE_INGREDIENT = exports.ADD_INGREDIENTS = exports.ADD_INGREDIENT = void 0;
exports.ADD_INGREDIENT = 'ADD_INGREDIENT';
exports.ADD_INGREDIENTS = 'ADD_INGEDIENTS';
exports.UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
exports.DELETE_INGREDIENT = 'DELETE_INGREDIENT';
exports.START_EDIT = 'START-EDIT';
exports.STOP_EDIT = 'STOP_EDIT';
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
var UpdateIngredient = /** @class */ (function () {
    function UpdateIngredient(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_INGREDIENT;
    }
    return UpdateIngredient;
}());
exports.UpdateIngredient = UpdateIngredient;
var DeleteIngredient = /** @class */ (function () {
    function DeleteIngredient() {
        this.type = exports.DELETE_INGREDIENT;
    }
    return DeleteIngredient;
}());
exports.DeleteIngredient = DeleteIngredient;
var StartEdit = /** @class */ (function () {
    function StartEdit(payload) {
        this.payload = payload;
        this.type = exports.START_EDIT;
    }
    return StartEdit;
}());
exports.StartEdit = StartEdit;
var StopEdit = /** @class */ (function () {
    function StopEdit() {
        this.type = exports.STOP_EDIT;
    }
    return StopEdit;
}());
exports.StopEdit = StopEdit;
