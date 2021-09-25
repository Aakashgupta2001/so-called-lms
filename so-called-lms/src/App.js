import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import MainHeader from "./Components/mainHeader/MainHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Router>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Router>
  );
}

export default App;
