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
        {filterData.map((i) => {
          const discount = Math.ceil(
            ((i.originalPrice - i.price) / i.originalPrice) * 100
          );

          return (
            <Product
              title={i.title}
              discount={discount}
              author={i.author}
              img={i.img}
              rating={i.rating}
              price={i.price}
              originalPrice={i.originalPrice}
            />
          );
        })}
      </div>
    </>
  );
};
