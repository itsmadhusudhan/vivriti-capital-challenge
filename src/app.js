import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BeerLayout from "./components/BeerLayout";
import "./styles/style.scss";
import configStore from "./redux/store/configStore";
import { fetchBeerWithRedux } from "./redux/actions/apiActions";
import { addItem } from "./redux/actions/cartActions";

const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchBeerWithRedux());

const app = (
  <Provider store={store}>
    <BeerLayout />
  </Provider>
);

setTimeout(() => {
  ReactDOM.render(app, document.getElementById("root"));
}, 2000);
