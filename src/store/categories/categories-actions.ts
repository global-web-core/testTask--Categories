import { ICategories } from "../../typesAndInterfaces/interfaces";

export enum CategoriesAction {
  SET = 'CATEGORIES/SET',
	CLEAR = 'CATEGORIES/CLEAR',
}

interface ISetCategoriesAction {
  type: CategoriesAction.SET;
  payload: ICategories.Db[];
}

interface IClearAllCategoriesAction {
  type: CategoriesAction.CLEAR;
}

export type TCategoriesAction = ISetCategoriesAction | IClearAllCategoriesAction;

export const setCategories = (payload: ICategories.Db[]): ISetCategoriesAction => ({
  type: CategoriesAction.SET,
  payload,
});

export const clearCategories = (): IClearAllCategoriesAction => ({
  type: CategoriesAction.CLEAR,
});