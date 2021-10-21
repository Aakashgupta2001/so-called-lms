import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      axios
        .get(
          "https://so-called-lms-final.herokuapp.com/api/v1/auth/token/verify",
          {
            headers: {
              authorization: localStorage.getItem("Authorization"),
            },
          }
        )
        .then((response) => {
          if (response.status === 202) {
            setIsLoggedIn(true);
          }
          console.log(response);
        });
      // setIsLoggedIn(true);
    }
    console.log("hey");
  }, []);

  const loginHandler = (email, password) => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://so-called-lms-final.herokuapp.com/api/v1/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.status == 202) {
          localStorage.setItem("Authorization", response.data.Authorization);
          setIsLoggedIn(true);
        } else {
          alert("invalid credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get("https://so-called-lms-final.herokuapp.com/").then((response) => {
      console.log(response);
    });

    // localStorage.setItem("isLoggedIn", "1");
    // setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("Authorization");

    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
