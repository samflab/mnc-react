import axios from "axios";
import React, { useEffect, useState } from "react";

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
            <div class="product">
              <div class="product-img">
                <img src={i.img} alt={i.title} class="img" />
                <span class="">
                  <i class="far fa-bookmark bookmark"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="product-name-container">
                  <span class="product-name">{i.title}</span>

                  <span class="rating" role="img">
                    {i.rating}/5⭐
                  </span>
                </div>
                <span class="author">by {i.author}</span>
                <div style={{marginBlock: "1rem"}}>
                  <span class="price-tag">₹ {i.price}</span>
                  <del class="price-tag original">₹ {i.originalPrice}</del>
                  <span class="price-tag discount">{discount}% Off</span>
                </div>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
