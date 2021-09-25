import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
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
