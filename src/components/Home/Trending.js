import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../ProductList/Product";

export const Trending = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const response = await axios.get("/api/products");
    const data = response.data.products;
    const newData = [...data].filter((i) => i.tag === "trending");
    setProduct(newData);
    return newData;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2 class="trending-header">--- Trending ---</h2>
      <p class="trending-sub">Top reads this week</p>
      <div class="trending">
        {product.map((i) => {
          const discount = Math.ceil((i.price / i.originalPrice) * 100);
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
    </div>
  );
};
