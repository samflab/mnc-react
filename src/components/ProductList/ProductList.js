import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Product } from "./Product";
import Filter from "./Filter";
import "./Filter.css";
import { useFilter } from "../../context/filter-context";
import { filterMethod } from "../../util/filter-method";

export const ProductList = () => {
  const [product, setProduct] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("/api/products");
    const data = response.data.products;
    setProduct(data);
    return data;
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { state } = useFilter();
  const filterData = filterMethod(state, product);

  return (
    <>
      <Filter />
      <div className="product-list-container">
        {filterData.map((filterProduct) => {
          const discount = Math.ceil(
            ((filterProduct.originalPrice - filterProduct.price) /
              filterProduct.originalPrice) *
              100
          );

          return (
            <Product
              title={filterProduct.title}
              discount={discount}
              author={filterProduct.author}
              img={filterProduct.img}
              rating={filterProduct.rating}
              price={filterProduct.price}
              originalPrice={filterProduct.originalPrice}
            />
          );
        })}
      </div>
    </>
  );
};
