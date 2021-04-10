"use strict";
exports.__esModule = true;
exports.shoppingReducer = void 0;
var ingredient_model_1 = require("../shared/ingredient.model");
var initialState = {
    ingredients: [new ingredient_model_1.Ingredient('apples', 10), new ingredient_model_1.Ingredient('banana', 2)]
};
function shoppingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
    }
}
exports.shoppingReducer = shoppingReducer;
