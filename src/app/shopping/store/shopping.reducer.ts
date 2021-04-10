import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingActions from './shopping.actions';
const initialState = {
  ingredients: [new Ingredient('apples', 10), new Ingredient('banana', 2)],
};
export function shoppingReducer(
  state = initialState,
  action: ShoppingActions.ShoppingActions
) {
  switch (action.type) {
    case ShoppingActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };

    default:
      return state;
  }
}
