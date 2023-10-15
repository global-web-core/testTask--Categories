import { Helpers } from "../../globals";
import { namePages } from "../../globals/constants/constants";
import { TBasic } from "../../typesAndInterfaces/types";
import { TPageAction, PageAction } from "./page-actions";

interface PageState {
  current: TBasic.Pages;
}

const initialState: PageState = {
  current: namePages.main,
};

const pageReducer = (state = initialState, action: TPageAction): PageState => {
  switch (action.type) {
    case PageAction.CHANGE:
      return {
        ...state,
        current: action.payload,
      };
    case PageAction.FORWARD: {
			let newUrl;
			if (state.current !== namePages.main) {
				newUrl = `${state.current}/${action.payload}`
			} else {
				newUrl = `${action.payload}`
			}

      return {
        ...state,
        current: newUrl,
      };
		}
    case PageAction.BACK: {
			const newUrl = Helpers.slicePreviousSlug(action.payload);
			console.log('===test', newUrl.length)
      return {
        ...state,
        current: newUrl.length === 0 ? namePages.main : newUrl,
      };
		}
    default:
      return state;
  }
};

export { pageReducer, PageAction };
export type { PageState };