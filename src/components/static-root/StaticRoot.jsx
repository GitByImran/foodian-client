import React from "react";
import "./StaticRoot.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

const StaticRoot = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header></Header>
      <div className="loader">
        {navigation.state === "loading" && (
          <LineWave
            height="200"
            width="200"
            color="#000"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default StaticRoot;
