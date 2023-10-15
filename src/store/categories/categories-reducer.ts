import { ICategories } from "../../typesAndInterfaces/interfaces";
import { TCategoriesAction, CategoriesAction } from "./categories-actions";

interface CategoriesState {
  data: ICategories.Db[] | null;
}

const initialState: CategoriesState = {
  data: null,
};

const categoriesReducer = (state = initialState, action: TCategoriesAction): CategoriesState => {
  switch (action.type) {
    case CategoriesAction.SET:
      return {
        ...state,
        data: action.payload,
      };
		case CategoriesAction.CLEAR:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export { categoriesReducer, CategoriesAction };
export type { CategoriesState };