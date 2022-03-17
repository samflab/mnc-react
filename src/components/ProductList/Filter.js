import React, { useState, useEffect } from "react";
import "./Filter.css";
import { useFilter } from "../../context/filter-context";
import axios from "axios";
export default function Filter() {
  const [showFilter, setShowFilter] = useState(false);
  const [categoryData, setCategoryData ] = useState([]);

  const getCategoryData = async () => {
    const response = await axios.get("/api/categories");
    const data = response.data.categories;
    const newData = [...data].map((i)=> i.categoryName);
    setCategoryData(newData)
    console.log(newData)
    return newData;
  }

  console.log(categoryData)
  useEffect(()=>{
    getCategoryData()
  },[])

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
                  payload: "LOW-TO-HIGH-PRICE",
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
                  payload: "HIGH-TO-LOW-PRICE",
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
                  payload: "LOW-TO-HIGH-RATING",
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
                  payload: "HIGH-TO-LOW-RATING",
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

