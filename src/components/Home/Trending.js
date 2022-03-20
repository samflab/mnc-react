import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { ACTION_TYPE } from "../../util/actionType";
import { dispatchHandler } from "../../util/dispatchHandler";
import { presentItem } from "../../util/presentItem";
import { ProductCard } from "../ProductList/ProductCard";
import "./Home.css";

export const Trending = () => {
  const [trending, setTrending] = useState([]);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  const getTrendingProducts = async () => {
    const response = await axios.get("/api/products");
    const data = response.data.products;
    const newData = [...data].filter((i) => i.tag === "trending");
    setTrending(newData);
    return newData;
  };

  useEffect(() => {
    getTrendingProducts();
  }, []);

  return (
    <div>
      <h2 class="trending-header">Trending</h2>
      <p class="trending-sub">Top reads this week</p>
      <div class="trending">
        {trending.map((product) => {
          const {
            _id,
            img,
            title,
            rating,
            author,
            price,
            originalPrice,
            discount,
          } = product;
          const inWishlist = presentItem(wishlistState, product);
          const inCart = presentItem(cartState, product);
          return (
            <ProductCard
              key={_id}
              id={_id}
              img={img}
              title={title}
              rating={rating}
              author={author}
              price={price}
              originalPrice={originalPrice}
              discount={discount}
              inWishlist={inWishlist}
              inCart={inCart}
              addToWishlist={() =>
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.ADD_TO_WISHLIST,
                  product
                )
              }
              removeFromWishlist={() =>
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.REMOVE_FROM_WISHLIST,
                  product
                )
              }
              addToCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.ADD_TO_CART,
                  product
                )
              }
              removeFromCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.REMOVE_FROM_CART,
                  product
                )
              }
              moveToCart={() => {
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.ADD_TO_CART,
                  product
                );
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.REMOVE_FROM_WISHLIST,
                  product
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
