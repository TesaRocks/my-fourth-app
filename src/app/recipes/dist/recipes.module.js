"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipesModule = void 0;
var core_1 = require("@angular/core");
var recipes_component_1 = require("./recipes.component");
var recipe_list_component_1 = require("./recipe-list/recipe-list.component");
var recipe_detail_component_1 = require("./recipe-detail/recipe-detail.component");
var recipe_item_component_1 = require("./recipe-list/recipe-item/recipe-item.component");
var recipe_start_component_1 = require("./recipe-start/recipe-start.component");
var recipe_edit_component_1 = require("./recipe-edit/recipe-edit.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var recipes_routing_module_1 = require("./recipes-routing.module");
var shared_module_1 = require("../shared/shared.module");
var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        core_1.NgModule({
            declarations: [
                recipes_component_1.RecipesComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_item_component_1.RecipeItemComponent,
                recipe_start_component_1.RecipeStartComponent,
                recipe_edit_component_1.RecipeEditComponent,
            ],
            imports: [
                router_1.RouterModule,
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule,
                recipes_routing_module_1.RecipesRoutingModule,
            ]
        })
    ], RecipesModule);
    return RecipesModule;
}());
exports.RecipesModule = RecipesModule;
