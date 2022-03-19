import React, { useState, useEffect } from "react";
import axios from "axios";

export const Category = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const response = await axios.get("/api/categories");
    const data = response.data.categories;
    setCategory(data);
    return data;
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <main className="category">
      <h2 className="masonary-title">Genres</h2>
      <div className="category-container">
        {category.map((category) => {
          return (
            <div className="category-card" key={category._id}>
              <img
                src={category.imgUrl}
                alt={category.categoryName}
                className="category-card-img"
              />
              <div className="overlay-xy xy-lg">
                <p className="overlay-text-x">{category.categoryName.split("-").join(" ")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
