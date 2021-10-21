import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";
import axios from "axios";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  const token = localStorage.getItem("Authorization");
  console.log(token);
  const [user, setUser] = useState("");
  useEffect(() => {
    console.log("navigation is loaded");
    axios
      .get(
        "https://so-called-lms-final.herokuapp.com/api/v1/auth/token/verify",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log("user = ", response);
        setUser(response.data.name);
      });
  }, []);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && <li> Hello, {user}</li>}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
