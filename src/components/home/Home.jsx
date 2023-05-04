import React from "react";
import Banner from "../../contents/banner/Banner";
import Recipes from "../../contents/recipes/Recipes";
import Feedback from "../../contents/feedback/Feedback";
import Features from "../../contents/features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recipes></Recipes>
      <Features></Features>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
