import React from "react";
import { Category } from "../components/Home/Category";
import { Hero } from "../components/Home/Hero";
import { Trending } from "../components/Home/Trending";

export const Home = () => {
  return (
    <>
      <Hero /> <Category /> <Trending/>
    </>
  );
};
