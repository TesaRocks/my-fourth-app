import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingService } from './shopping.service';
import { Store } from '@ngrx/store';
import * as fromShopping from './store/shopping.reducer';
import * as ShoppingActions from './store/shopping.actions';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  ingChangeSub: Subscription;
  constructor(
    //private shoppingService: ShoppingService,
    private store: Store<fromShopping.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shopping');
    // this.ingredients = this.shoppingService.getIngredients();
    // this.ingChangeSub = this.shoppingService.ingredientsChanged.subscribe(
    //   (ing: Ingredient[]) => {
    //     this.ingredients = ing;
    //   }
    // );
  }
  onEdit(id: number) {
    // this.shoppingService.startedEditing.next(id);
    this.store.dispatch(new ShoppingActions.StartEdit(id));
  }
  ngOnDestroy() {
    //    this.ingChangeSub.unsubscribe();
  }
}
