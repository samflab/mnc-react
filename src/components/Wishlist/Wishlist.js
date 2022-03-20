import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { EmptyWishlist } from "./EmptyWishlist";
import "./Wishlist.css";

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  
  return (
    <>
      <h2 class="page-heading">Wishlist</h2>

      {wishlistState.length === 0 ? <EmptyWishlist /> : ""}
      <div className="wishlist-container">
        {wishlistState.map((product) => {
          return (
            <div className="product" key={product._id}>
              <div className="product-img">
                <img src={product.img} alt={product.title} className="img" />
                <span
                  className=""
                  onClick={() =>
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: product,
                    })
                  }
                >
                  <i className="far fa-times-circle close bookmark"></i>
                </span>
              </div>
              <div className="card-body">
                <div className="product-name-container">
                  <span className="product-name">{product.title}</span>

                  <span className="rating" role="img">
                    {product.rating}/5⭐
                  </span>
                </div>
                <span className="author">by {product.author}</span>
                <div style={{ marginBlock: "1rem" }}>
                  <span className="price-tag">₹{product.price}</span>
                  <del className="price-tag original">
                    ₹{product.originalPrice}
                  </del>
                  <span className="price-tag discount">
                    {product.discount}% Off
                  </span>
                </div>
                <button
                  className="add-to-cart"
                  disabled={
                    cartState.find((cartItem) => cartItem._id === product._id)
                      ? true
                      : false
                  }
                  onClick={() => {
                    cartDispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    });
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: product,
                    });
                  }}
                >
                  {cartState.find((cartItem) => cartItem._id === product._id)
                    ? "Already in Cart"
                    : "Move to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
