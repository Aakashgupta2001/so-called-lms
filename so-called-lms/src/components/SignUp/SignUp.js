import React from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.SignUp}>
      <form>
        <table cellSpacing="40">
          <tr>
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input type="email" id="email"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input type="password" id="password"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
            </td>
            <td>
              <input type="text" id="name"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="phone">Phone</label>
            </td>
            <td>
              <input type="text" id="phone"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="displayName">Display Name</label>
            </td>
            <td>
              <input type="text" id="displayName"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="batch">Batch</label>
            </td>
            <td>
              <select id="batch" name="Batch">
                <option value="Batch 1">Batch 1</option>
                <option value="Batch 2">Batch 2</option>
                <option value="Batch 3">Batch 3</option>
              </select>
            </td>
          </tr>
        </table>
        <div className="buttonStyle">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
