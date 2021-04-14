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
exports.DataStorageService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var RecipesActions = require("../recipes/store/recipe.actions");
//import { AuthService } from '../auth/auth.service';
var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, recipeService, 
    //private authService: AuthService
    store) {
        this.http = http;
        this.recipeService = recipeService;
        this.store = store;
    }
    DataStorageService.prototype.storeRecipes = function () {
        var recipes = this.recipeService.getRecipes();
        this.http
            .put('https://my-fourth-app-9e04f-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.fetchRecipes = function () {
        var _this = this;
        return this.http
            .get('https://my-fourth-app-9e04f-default-rtdb.firebaseio.com/recipes.json')
            .pipe(operators_1.map(function (recipes) {
            return recipes.map(function (recipe) {
                return __assign(__assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), operators_1.tap(function (recipes) {
            //this.recipeService.setRecipes(recipes);
            _this.store.dispatch(new RecipesActions.SetRecipes(recipes));
        }));
    };
    DataStorageService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], DataStorageService);
    return DataStorageService;
}());
exports.DataStorageService = DataStorageService;
