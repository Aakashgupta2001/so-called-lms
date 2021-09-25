import React from "react";

const SignUp = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email"></input>

      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>

      <label htmlFor="name">Name</label>
      <input type="text" id="name"></input>

      <label htmlFor="phone">Phone</label>
      <input type="text" id="phone"></input>

      <label htmlFor="displayName"></label>
      <input type="text" id="displayName"></input>

      <label htmlFor="batch"></label>
      <select id="batch" name="Batch">
        <option value="Batch 1">Batch 1</option>
        <option value="Batch 2">Batch 2</option>
        <option value="Batch 3">Batch 3</option>
      </select>
    </form>
  );
};

export default SignUp;
