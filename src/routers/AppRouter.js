import React from 'react';
import { BrowserRouter, Route,Switch,hashHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import BeerLayout from "../components/BeerLayout";
import BeerStylePage from '../components/BeerStylePage';
import CartPage from '../components/CartPage';

const AppRouter = () => {
  return (
    <BrowserRouter history={ hashHistory }>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={BeerLayout} exact={true} />
          <Route path="/beerstyle/:id" component={BeerStylePage}  />
          <Route path="/cart" component={CartPage} exact={true} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
