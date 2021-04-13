import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
//import { ShoppingService } from '../shopping.service';
import { Store } from '@ngrx/store';
import * as ShoppingActions from '../store/shopping.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  //editedItemIndex: number;
  editedItem: Ingredient;
  constructor(
    //  private shoppingService: ShoppingService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shopping').subscribe((storeData) => {
      if (storeData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = storeData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      } else {
        this.editMode = false;
      }
    });
  }

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

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      //this.shoppingService.updateIngredient(this.editedItemIndex, newIng);
      this.store.dispatch(new ShoppingActions.UpdateIngredient(newIng));
    } else {
      //this.shoppingService.addIngredient(newIng);
      this.store.dispatch(new ShoppingActions.AddIngredient(newIng));
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.editMode = false;
    this.slForm.reset();
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
  onDelete() {
    // this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingActions.DeleteIngredient());
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
}
