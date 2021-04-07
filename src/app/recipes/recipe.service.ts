import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Milanesa',
      'la mejor',
      'https://www.196flavors.com/wp-content/uploads/2018/12/milanesa-7-FP-500x500.jpg',
      [new Ingredient('meat', 2), new Ingredient('avocado', 2)]
    ),
    new Recipe(
      'Choripan',
      'mm que rico',
      'https://cdn.kiwilimon.com/recetaimagen/37191/46761.jpg',
      [new Ingredient('chorizo', 1), new Ingredient('bread', 2)]
    ),
  ];
  constructor(private shoppingService: ShoppingService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
}
