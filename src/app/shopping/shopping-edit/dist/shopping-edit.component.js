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
    function ShoppingEditComponent(
    //  private shoppingService: ShoppingService,
    store) {
        this.store = store;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('shopping').subscribe(function (storeData) {
            if (storeData.editedIngredientIndex > -1) {
                _this.editMode = true;
                _this.editedItem = storeData.editedIngredient;
                _this.slForm.setValue({
                    name: _this.editedItem.name,
                    amount: _this.editedItem.amount
                });
            }
            else {
                _this.editMode = false;
            }
        });
    };
    // this.subscription = this.shoppingService.startedEditing.subscribe(
    //   (id: number) => {
    //     this.editedItemIndex = id;
    //     this.editMode = true;
    //     this.editedItem = this.shoppingService.getIngredient(id);
    //     this.slForm.setValue({
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount,
    //     });
    //   }
    // );
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIng = new ingredient_model_1.Ingredient(value.name, value.amount);
        if (this.editMode) {
            //this.shoppingService.updateIngredient(this.editedItemIndex, newIng);
            this.store.dispatch(new ShoppingActions.UpdateIngredient(newIng));
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
        this.store.dispatch(new ShoppingActions.StopEdit());
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        // this.shoppingService.deleteIngredient(this.editedItemIndex);
        this.store.dispatch(new ShoppingActions.DeleteIngredient());
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.store.dispatch(new ShoppingActions.StopEdit());
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
