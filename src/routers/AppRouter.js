import React from 'react';
import { BrowserRouter, Route,Switch,hashHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import BeerLayout from "../components/BeerLayout";
import BeerStylePage from '../components/BeerStylePage';

const AppRouter = () => {
  return (
    <BrowserRouter history={ hashHistory }>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={BeerLayout} exact={true} />
          <Route path="/beerstyle/:id" component={BeerStylePage}  />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
