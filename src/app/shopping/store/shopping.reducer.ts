import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingActions from './shopping.actions';

export interface AppState {
  shopping: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}
const initialState: State = {
  ingredients: [new Ingredient('apples', 10), new Ingredient('banana', 2)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};
export function shoppingReducer(
  state: State = initialState,
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
    case ShoppingActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case ShoppingActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ing, igIndex) => {
          return igIndex != state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
    case ShoppingActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };

    default:
      return state;
  }
}
