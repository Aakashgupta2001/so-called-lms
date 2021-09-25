import React from "react";
import Card from "../UI/card";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </Card>
  );
};

export default Login;
