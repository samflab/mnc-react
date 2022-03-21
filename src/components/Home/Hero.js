import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Hero = () => {
  return (
    <main className="hero-container-grid">
      <div className="hero-content">
        <h1 className="hero-name-bold">MangaNotComics</h1>
        <h2 className="hero-tagline">Let's weeb together</h2>
        <p className="hero-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
        <Link to="/products">
          <button className="action-btn">Explore More</button>
        </Link>
      </div>
      <div className="hero-img-container">
        <img src="/img/hero-img.jpg" alt="Silent Voice" className="hero-img-tilt" />
      </div>
    </main>
  );
};
