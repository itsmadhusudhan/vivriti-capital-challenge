import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BeerLayout from "./components/BeerLayout";
import "./styles/style.scss";
import configStore from "./redux/store/configStore";
import { fetchBeerWithRedux, fetchBeerSuccess } from "./redux/actions/apiActions";
import { addItem } from "./redux/actions/cartActions";
import AppRouter from "./routers/AppRouter";

const store = configStore();

try {
  const beers = JSON.parse(localStorage.getItem("beers"));
  console.log(beers)
  !beers?store.dispatch(fetchBeerWithRedux()):store.dispatch(fetchBeerSuccess(beers.beer))
  
} catch (e) {
  //do nothing
}

store.subscribe(() => {
  console.log(store.getState());
  console.log("saving data");
      const json = JSON.stringify(store.getState());
      localStorage.setItem("beers", json);
});

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
