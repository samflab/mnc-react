import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Hero = () => {
  return (
    <main class="hero-container-grid">
      <div class="hero-content">
        <h1 class="hero-name-bold">MangaNotComics</h1>
        <h2 class="hero-tagline">Let's weeb together</h2>
        <p class="hero-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
        <Link to="/products">
          <button class="action-btn">Explore More</button>
        </Link>
      </div>
      <div class="hero-img-container">
        <img src="/img/hero-img.jpg" alt="Silent Voice" class="hero-img-tilt" />
      </div>
    </main>
  );
};
