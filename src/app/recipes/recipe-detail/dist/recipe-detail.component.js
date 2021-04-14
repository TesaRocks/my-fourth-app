"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeDetailComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router, store) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.store = store;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.map(function (params) {
            return +params['id'];
        }), operators_1.switchMap(function (id) {
            _this.id = id;
            return _this.store.select('recipes');
        }), operators_1.map(function (recipesState) {
            return recipesState.recipes.find(function (rec, index) {
                return index === _this.id;
            });
        }))
            .subscribe(function (recipe) {
            _this.recipe = recipe;
        });
    };
    RecipeDetailComponent.prototype.toShop = function () {
        this.recipeService.addIngToShopping(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-detail',
            templateUrl: './recipe-detail.component.html',
            styleUrls: ['./recipe-detail.component.css']
        })
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
