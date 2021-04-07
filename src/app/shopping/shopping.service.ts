import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 10),
    new Ingredient('banana', 2),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
