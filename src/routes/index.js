import React from "react";
import Login from "containers/Login";
import Home from "containers/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "utils/constants";
import PrivateRoute from "./private";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTES.inicial.path} exact component={Login} />
      <PrivateRoute path={ROUTES.home.path} component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
