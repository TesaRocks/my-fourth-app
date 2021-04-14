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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var RecipesActions = require("./recipe.actions");
var RecipeEffects = /** @class */ (function () {
    function RecipeEffects(actions$, http, store) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.fetchRecipes = this.actions$.pipe(effects_1.ofType(RecipesActions.FETCH_RECIPES), operators_1.switchMap(function () {
            return _this.http.get('https://my-fourth-app-9e04f-default-rtdb.firebaseio.com/recipes.json');
        }), operators_1.map(function (recipes) {
            return recipes.map(function (recipe) {
                return __assign(__assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), operators_1.map(function (recipes) {
            return new RecipesActions.SetRecipes(recipes);
        }));
        this.storeRecipes = this.actions$.pipe(effects_1.ofType(RecipesActions.STORE_RECIPES), operators_1.withLatestFrom(this.store.select('recipes')), operators_1.switchMap(function (_a) {
            var actionData = _a[0], recipesState = _a[1];
            return _this.http.put('https://my-fourth-app-9e04f-default-rtdb.firebaseio.com/recipes.json', recipesState.recipes);
        }));
    }
    __decorate([
        effects_1.Effect()
    ], RecipeEffects.prototype, "fetchRecipes");
    __decorate([
        effects_1.Effect({ dispatch: false })
    ], RecipeEffects.prototype, "storeRecipes");
    RecipeEffects = __decorate([
        core_1.Injectable()
    ], RecipeEffects);
    return RecipeEffects;
}());
exports.RecipeEffects = RecipeEffects;
