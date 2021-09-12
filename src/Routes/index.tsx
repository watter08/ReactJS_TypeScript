import React , { FunctionComponent  , Fragment , ReactDOM } from "react";
import { HelloWorld } from "../Pages/";
import { Route, Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";


function AppRoutes() {
  return (
    <Fragment>
      <Switch>

        <ProtectedRoute
          exact={true}
          path="/"
          component={HelloWorld}          
        ></ProtectedRoute>

        </Switch>

    </Fragment>
  );
}

export default AppRoutes;
