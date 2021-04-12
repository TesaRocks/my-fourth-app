"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingComponent = void 0;
var core_1 = require("@angular/core");
var ShoppingActions = require("./store/shopping.actions");
var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(shoppingService, store) {
        this.shoppingService = shoppingService;
        this.store = store;
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        this.ingredients = this.store.select('shopping');
        // this.ingredients = this.shoppingService.getIngredients();
        // this.ingChangeSub = this.shoppingService.ingredientsChanged.subscribe(
        //   (ing: Ingredient[]) => {
        //     this.ingredients = ing;
        //   }
        // );
    };
    ShoppingComponent.prototype.onEdit = function (id) {
        // this.shoppingService.startedEditing.next(id);
        this.store.dispatch(new ShoppingActions.StartEdit(id));
    };
    ShoppingComponent.prototype.ngOnDestroy = function () {
        //    this.ingChangeSub.unsubscribe();
    };
    ShoppingComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping',
            templateUrl: './shopping.component.html',
            styleUrls: ['./shopping.component.css']
        })
    ], ShoppingComponent);
    return ShoppingComponent;
}());
exports.ShoppingComponent = ShoppingComponent;
