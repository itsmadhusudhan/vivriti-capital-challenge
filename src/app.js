import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BeerLayout from "./components/BeerLayout";
import "./styles/style.scss";
import configStore from "./redux/store/configStore";
import { fetchBeerWithRedux } from "./redux/actions/apiActions";
import { addItem } from "./redux/actions/cartActions";
import AppRouter from "./routers/AppRouter";

const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchBeerWithRedux());

const app = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

function run() {
  ReactDOM.render(app, document.getElementById("root"));
}

if (window.addEventListener) {
  window.addEventListener("DOMContentLoaded", run);
} else {
  window.attachEvent("onload", run);
}
