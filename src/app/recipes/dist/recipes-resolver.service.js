"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipesResolverService = void 0;
var core_1 = require("@angular/core");
//import { RecipeService } from './recipe.service';
var effects_1 = require("@ngrx/effects");
var RecipesActions = require("./store/recipe.actions");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var RecipesResolverService = /** @class */ (function () {
    function RecipesResolverService(
    //private dataStorageService: DataStorageService,
    // private recipeService: RecipeService,
    store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    RecipesResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        //const recipes = this.recipeService.getRecipes();
        return this.store.select('recipes').pipe(operators_1.take(1), operators_1.map(function (recipesState) {
            return recipesState.recipes;
        }), operators_1.switchMap(function (recipes) {
            if (recipes.length === 0) {
                _this.store.dispatch(new RecipesActions.FetchRecipes());
                return _this.actions$.pipe(effects_1.ofType(RecipesActions.SET_RECIPES), operators_1.take(1));
            }
            else {
                return rxjs_1.of(recipes);
            }
        }));
    };
    RecipesResolverService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], RecipesResolverService);
    return RecipesResolverService;
}());
exports.RecipesResolverService = RecipesResolverService;
