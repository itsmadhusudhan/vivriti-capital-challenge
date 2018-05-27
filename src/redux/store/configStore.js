import { applyMiddleware, combineReducers, createStore } from "redux";
import { middleware } from "../middleware/middleware";
import beerReducer from "../reducers/beerReducer";
import cartReducer from "../reducers/cartReducer";
import beerFiltersRducer from "../reducers/beerFiltersReducer";

export default () => {
  const store = createStore(
    combineReducers({ beer: beerReducer,items:cartReducer,filters:beerFiltersRducer }),
    applyMiddleware(middleware)
  );
  return store;
};
