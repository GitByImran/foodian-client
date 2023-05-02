import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const StaticRoot = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default StaticRoot;
