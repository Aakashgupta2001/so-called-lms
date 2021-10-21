import React from "react";
import classes from "./Home.module.css";
import Sidebar from "../../Dashboard/Sidebar";

const Home = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className={classes.home}></div>
    </React.Fragment>
  );
};

export default Home;
