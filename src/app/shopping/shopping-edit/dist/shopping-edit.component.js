"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingEditComponent = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("src/app/shared/ingredient.model");
var ShoppingActions = require("../store/shopping.actions");
var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shoppingService, store) {
        this.shoppingService = shoppingService;
        this.store = store;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingService.startedEditing.subscribe(function (id) {
            _this.editedItemIndex = id;
            _this.editMode = true;
            _this.editedItem = _this.shoppingService.getIngredient(id);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIng = new ingredient_model_1.Ingredient(value.name, value.amount);
        if (this.editMode) {
            //this.shoppingService.updateIngredient(this.editedItemIndex, newIng);
            this.store.dispatch(new ShoppingActions.UpdateIngredient({
                index: this.editedItemIndex,
                ingredient: newIng
            }));
        }
        else {
            //this.shoppingService.addIngredient(newIng);
            this.store.dispatch(new ShoppingActions.AddIngredient(newIng));
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.editMode = false;
        this.slForm.reset();
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        // this.shoppingService.deleteIngredient(this.editedItemIndex);
        this.store.dispatch(new ShoppingActions.DeleteIngredient(this.editedItemIndex));
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('f', { static: false })
    ], ShoppingEditComponent.prototype, "slForm");
    ShoppingEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-edit',
            templateUrl: './shopping-edit.component.html',
            styleUrls: ['./shopping-edit.component.css']
        })
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());
exports.ShoppingEditComponent = ShoppingEditComponent;
