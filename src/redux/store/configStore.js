import { applyMiddleware, combineReducers, createStore } from "redux";
import { middleware } from "../middleware/middleware";
import beerReducer from "../reducers/beerReducer";
import cartReducer from "../reducers/cartReducer";

export default () => {
  const store = createStore(
    combineReducers({ beer: beerReducer,items:cartReducer }),
    applyMiddleware(middleware)
  );
  return store;
};
