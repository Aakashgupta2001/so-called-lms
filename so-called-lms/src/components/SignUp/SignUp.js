import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import classes from "./SignUp.module.css";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const signUpHandler = (e) => {
    console.log("btn clicked");
    e.preventDefault();
    let body = {
      email: email,
      password: password,
      name: name,
    };
    axios
      .post("https://so-called-lms.herokuapp.com/api/v1/auth/signup", body)
      .then((response) => {
        console.log(response);
        alert("signup successfull");
      })
      .catch((err) => console.log(err));
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className={classes.SignUp}>
      <form onSubmit={signUpHandler}>
        <table cellSpacing="40">
          <tr>
            <td>
              <label htmlFor="name">Name</label>
            </td>
            <td>
              <input
                type="text"
                id="name"
                value={name}
                onChange={nameHandler}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input
                type="email"
                id="email"
                value={email}
                onChange={emailHandler}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input
                type="password"
                id="password"
                value={password}
                onChange={passwordHandler}
              ></input>
            </td>
          </tr>
        </table>
        <div className={classes.actions}>
          <button className={classes.buttonStyle}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
