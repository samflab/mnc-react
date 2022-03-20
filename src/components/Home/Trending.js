import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { ACTION_TYPE } from "../../util/dispatchData";
import { dispatchHandler } from "../../util/dispatchHandler";

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
          const inWishlist = wishlistState.find(
            (wishlistItem) => wishlistItem._id === product._id
          );
          const inCart = cartState.find(
            (cartItem) => cartItem._id === product._id
          );
          return (
            <div class="product" key={product.id}>
              <div class="product-img">
                <img src={product.img} alt={product.title} class="img" />
                {inWishlist ? (
                  <span
                    key={product._id}
                    onClick={() =>
                      dispatchHandler(
                        wishlistDispatch,
                        ACTION_TYPE.REMOVE_FROM_WISHLIST,
                        product
                      )
                    }
                  >
                    <i className="far fa-times-circle close bookmark"></i>
                  </span>
                ) : (
                  <span
                    key={product._id}
                    class=""
                    onClick={() =>
                      dispatchHandler(
                        wishlistDispatch,
                        ACTION_TYPE.ADD_TO_WISHLIST,
                        product
                      )
                    }
                  >
                    <i class="far fa-bookmark bookmark"></i>
                  </span>
                )}
              </div>
              <div class="card-body">
                <div class="product-name-container">
                  <span class="product-name">{product.title}</span>

                  <span class="rating" role="img">
                    {product.rating}/5⭐
                  </span>
                </div>
                <span class="author">by {product.author}</span>
                <div style={{ marginBlock: "1rem" }}>
                  <span class="price-tag">₹{product.price}</span>
                  <del class="price-tag original">₹{product.originalPrice}</del>
                  <span class="price-tag discount">
                    {product.discount}% Off
                  </span>
                </div>
                <button
                  class="add-to-cart"
                  onClick={() =>
                    dispatchHandler(
                      cartDispatch,
                      ACTION_TYPE.ADD_TO_CART,
                      product
                    )
                  }

                  disabled={inCart}
                >

                  {inCart ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
