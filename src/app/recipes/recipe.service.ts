import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Shoppingactions from '../shopping/store/shopping.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  constructor(
    //  private shoppingService: ShoppingService,
    private store: Store<fromApp.AppState>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngToShopping(ingredients: Ingredient[]) {
    //this.shoppingService.addIngredients(ingredients);
    this.store.dispatch(new Shoppingactions.Addingredients(ingredients));
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newR: Recipe) {
    this.recipes[index] = newR;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
