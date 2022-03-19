import React, { useState, useEffect } from "react";
import "./Filter.css";
import { useFilter } from "../../context/filter-context";
import axios from "axios";
export default function Filter() {
  const [showFilter, setShowFilter] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const getCategoryData = async () => {
    const response = await axios.get("/api/categories");
    const data = response.data.categories;
    const newData = [...data].map((i) => i.categoryName);
    setCategoryData(newData);
    return newData;
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const {
    state: { priceSort, category, ratingSort, range },
    dispatch,
  } = useFilter();

  return (
    <>
      <button onClick={() => setShowFilter(() => !showFilter)} class="filter">
        <i class="fas fa-sort"></i> Filters
      </button>
      {showFilter ? (
        <div className="filter-div">
          <div>
            <h3 className="filter-heading">
              <u>Sort by Price</u>
              <button
                onClick={() => dispatch({ type: "CLEAR_FILTER" })}
                className="clear-filter"
              >
                Clear
              </button>
            </h3>

            <label htmlFor="price-sort" className="checkbox">
              <input
                type="radio"
                checked={priceSort === "LOW-TO-HIGH-PRICE"}
                onChange={() =>
                  dispatch({
                    type: "PRICE_SORT",
                    payload: "LOW-TO-HIGH-PRICE",
                  })
                }
                value="low-high-price"
                name="price-sort"
                id="low-high-price"
              />
              Price: Low to High
            </label>
            <br />

            <label htmlFor="price-sort" className="checkbox">
              <input
                type="radio"
                checked={priceSort === "HIGH-TO-LOW-PRICE"}
                onChange={() =>
                  dispatch({
                    type: "PRICE_SORT",
                    payload: "HIGH-TO-LOW-PRICE",
                  })
                }
                value="high-low-price"
                name="price-sort"
                id="high-low-price"
              />
              Price: High to Low
            </label>
          </div>

          <div>
            <h3 className="filter-heading">
              <u>Price Range</u>
            </h3>
            <span className="max-price">Under {range}</span>
            <input
              type="range"
              value={range}
              onChange={(event) =>
                dispatch({
                  type: "PRICE_RANGE",
                  payload: event.target.value,
                })
              }
              min="0"
              max="2000"
              id="range"
              className="slider"
            />
          </div>
          <div>
            <h3>
              <u>Rating</u>
            </h3>

            <label htmlFor="rating-sort" className="checkbox">
              <input
                type="radio"
                checked={ratingSort === "LOW-TO-HIGH-RATING"}
                onChange={() =>
                  dispatch({
                    type: "RATING_SORT",
                    payload: "LOW-TO-HIGH-RATING",
                  })
                }
                value="low-high-rating"
                name="rating-sort"
                id="low-high-rating"
              />
              Rating: Low to High
            </label>
            <br />

            <label htmlFor="rating-sort" className="checkbox">
              <input
                type="radio"
                checked={ratingSort === "HIGH-TO-LOW-RATING"}
                onChange={() =>
                  dispatch({
                    type: "RATING_SORT",
                    payload: "HIGH-TO-LOW-RATING",
                  })
                }
                value="high-low-rating"
                name="rating-sort"
                id="high-low-rating"
              />
              Rating: High to Low
            </label>
          </div>
          <div>
            <h3>
              <u>Categories</u>
            </h3>
            <div className="category-container-div">
              {categoryData.map((genre, id) => {
                return (
                  <div className="category-item" key={id}>
                    <label htmlFor={genre} className="checkbox">
                      <input
                        type="checkbox"
                        checked={category.includes(genre)}
                        onChange={() =>
                          dispatch({ type: "CATEGORY", payload: genre })
                        }
                        name={genre}
                        id={genre}
                        className="category-input"
                      />
                      {genre.split("-").join("")}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}
