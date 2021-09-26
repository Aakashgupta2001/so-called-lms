import React, { useContext } from "react";
import AuthContext from "./store/auth-context";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Router>
      <MainHeader />
      <Switch>
        {!ctx.isLoggedIn && <Route path="/" exact component={Login} />}
        {ctx.isLoggedIn && <Route path="/" component={Home} />}
      </Switch>
    </Router>
  );
}

export default App;
