import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";
import Sidebar from "../../Dashboard/Sidebar";

import Table from "../Table/Table";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Sidebar />
      <div className={classes.home}></div>
    </React.Fragment>
  );
};

export default Home;
