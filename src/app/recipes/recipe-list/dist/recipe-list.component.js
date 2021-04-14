"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeListComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService, router, route, store) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
        this.store = store;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.subscription = this.recipeService.recipesChanged.subscribe(
        this.subscription = this.store
            .select('recipes')
            .pipe(operators_1.map(function (recipesState) {
            return recipesState.recipes;
        }))
            .subscribe(function (rec) {
            _this.recipes = rec;
        });
        //this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
