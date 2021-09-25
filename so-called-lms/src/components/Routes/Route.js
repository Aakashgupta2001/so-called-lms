import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

const Route = () => {
  return (
    <Router history={history}>
      <Switch>
        {!ctx.isLoggedIn && <Route path="/" exact component={Login} />}
        {ctx.isLoggedIn && <Route path="/home" component={Home} />}
      </Switch>
    </Router>
  );
};

export default Route;
