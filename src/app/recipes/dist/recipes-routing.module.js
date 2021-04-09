"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth/auth.guard");
var recipe_detail_component_1 = require("./recipe-detail/recipe-detail.component");
var recipe_edit_component_1 = require("./recipe-edit/recipe-edit.component");
var recipe_start_component_1 = require("./recipe-start/recipe-start.component");
var recipes_resolver_service_1 = require("./recipes-resolver.service");
var recipes_component_1 = require("./recipes.component");
var routes = [
    {
        path: 'recipes',
        component: recipes_component_1.RecipesComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            { path: 'new', component: recipe_edit_component_1.RecipeEditComponent },
            {
                path: ':id',
                component: recipe_detail_component_1.RecipeDetailComponent,
                resolve: [recipes_resolver_service_1.RecipesResolverService]
            },
            {
                path: ':id/edit',
                component: recipe_edit_component_1.RecipeEditComponent,
                resolve: [recipes_resolver_service_1.RecipesResolverService]
            },
        ]
    },
];
var RecipesRoutingModule = /** @class */ (function () {
    function RecipesRoutingModule() {
    }
    RecipesRoutingModule = __decorate([
        core_1.NgModule({ imports: [router_1.RouterModule.forChild(routes)], exports: [router_1.RouterModule] })
    ], RecipesRoutingModule);
    return RecipesRoutingModule;
}());
exports.RecipesRoutingModule = RecipesRoutingModule;
