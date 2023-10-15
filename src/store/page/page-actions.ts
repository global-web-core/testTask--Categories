import { TBasic } from "../../typesAndInterfaces/types";

export enum PageAction {
  CHANGE = 'PAGE/CHANGE',
  FORWARD = 'PAGE/FORWARD',
  BACK = 'PAGE/BACK'
}

interface IChangePageAction {
  type: PageAction.CHANGE;
  payload: TBasic.Pages;
}

interface IForwardPageAction {
  type: PageAction.FORWARD;
  payload: TBasic.Pages;
}

interface IBackPageAction {
  type: PageAction.BACK;
  payload: TBasic.Pages;
}

export type TPageAction = IChangePageAction | IForwardPageAction | IBackPageAction;

export const changePage = (payload: TBasic.Pages): IChangePageAction => ({
  type: PageAction.CHANGE,
  payload,
});

export const forwardPage = (payload: TBasic.Pages): IForwardPageAction => ({
  type: PageAction.FORWARD,
  payload,
});

export const backPage = (payload: TBasic.Pages): IBackPageAction => ({
  type: PageAction.BACK,
  payload,
});