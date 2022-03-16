import React, { useState } from "react";
import "./Filter.css";
import { useFilter } from "../../context/filter-context";
export default function Filter() {
  const [showFilter, setShowFilter] = useState(false);
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
        <div className="filter-div" style={{ display: "block" }}>
          <div>
            <h3
              className="filter-heading"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <u>Price</u>
              <button
                onClick={() => dispatch({ type: "CLEAR_FILTER" })}
                className="clear-filter"
              >
                Clear
              </button>
            </h3>
            <input
              type="radio"
              checked={priceSort === "low-to-high-price"}
              onChange={() =>
                dispatch({
                  type: "PRICE_SORT",
                  payload: "low-to-high-price",
                })
              }
              value="low-high-price"
              name="price-sort"
              id="low-high-price"
            />
            <label htmlFor="price-sort" className="checkbox">
              Price: low to high
            </label>
            <br />
            <input
              type="radio"
              checked={priceSort === "high-to-low-price"}
              onChange={() =>
                dispatch({
                  type: "PRICE_SORT",
                  payload: "high-to-low-price",
                })
              }
              value="high-low-price"
              name="price-sort"
              id="high-low-price"
            />
            <label htmlFor="price-sort" className="checkbox">
              Price: high to low
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
            <input
              type="radio"
              checked={ratingSort === "low-to-high-rating"}
              onChange={() =>
                dispatch({
                  type: "RATING_SORT",
                  payload: "low-to-high-rating",
                })
              }
              value="low-high-rating"
              name="rating-sort"
              id="low-high-rating"
            />
            <label htmlFor="rating-sort" className="checkbox">
              Rating: low to high
            </label>
            <br />
            <input
              type="radio"
              checked={ratingSort === "high-to-low-rating"}
              onChange={() =>
                dispatch({
                  type: "RATING_SORT",
                  payload: "high-to-low-rating",
                })
              }
              value="high-low-rating"
              name="rating-sort"
              id="high-low-rating"
            />
            <label htmlFor="rating-sort" className="checkbox">
              Rating: high to low
            </label>
          </div>
          <div>
            <h3>
              <u>Categories</u>
            </h3>
            <div style={{display:"flex",flexWrap:"wrap"}}>
              {categoryData.map((genre) => {
                return (
                  <div style={{display:"flex", alignItems:"center"}}>
                    <input
                      type="checkbox"
                      checked={category.includes(genre.type)}
                      onChange={() =>
                        dispatch({ type: "CATEGORY", payload: genre.type })
                      }
                      name={genre.type}
                      id={genre.type}
                      style={{marginRight:"0.5rem"}}
                    />
                    <label htmlFor={genre.type} className="checkbox">
                      {genre.type.split("-").join("")}
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

export const categoryData = [
  {
    type: "drama",
  },
  {
    type: "horror",
  },
  {
    type: "shonen",
  },
  {
    type: "shojo",
  },
  {
    type: "seinen",
  },
  {
    type: "romantic",
  },
  {
    type: "fantasy",
  },

  {
    type: "adventure",
  },
  {
    type: "mystery",
  },
  {
    type: "slice-of-life",
  },
  {
    type: "thriller",
  },
  {
    type: "comedy",
  },
  {
    type: "action",
  },
];
