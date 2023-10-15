import { legacy_createStore as createStore, combineReducers } from 'redux';
import { categoriesReducer } from './categories/categories-reducer';
import { pageReducer } from './page/page-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  page: pageReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

export default store;