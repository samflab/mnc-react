import React from "react";
import { Category, Hero, Trending } from "../components/Home/index.js";

export const Home = () => {
  return (
    <>
      <Hero /> <Category /> <Trending/>
    </>
  );
};
