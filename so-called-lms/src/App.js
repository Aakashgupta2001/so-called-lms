import React, { useState, useEffect, useContext } from "react";
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
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Router>
  );
}

export default App;
