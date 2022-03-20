import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { dispatchHandler } from "../../util/dispatchHandler";
import { ACTION_TYPE } from "../../util/dispatchData";
import "./Cart.css";

export const CartItems = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <>
      <div className="cart-product-container">
        {cartState.map((product) => {
          return (
            <div className="cart-card" key={product._id}>
              <div className="cart-img-container">
                <img
                  src={product.img}
                  alt={product.title}
                  className="cart-img"
                />
                <i
                  className="fas fa-trash-alt delete"
                  onClick={() =>
                    dispatchHandler(
                      cartDispatch,
                      ACTION_TYPE.REMOVE_FROM_CART,
                      product
                    )
                  }
                ></i>
              </div>

              <div className="card-content-hrz">
                <h4 className="card-title-hrz">{product.title}</h4>
                <p className="card-seller-hrz">by {product.author}</p>

                <div className="quantity">
                  <button
                    className="increase-quantity"
                    onClick={() =>
                      dispatchHandler(
                        cartDispatch,
                        ACTION_TYPE.INCREASE_QUANTITY,
                        product
                      )
                    }
                  >
                    +
                  </button>
                  <span className="quantity-wt">{product.quantity}</span>
                  <button
                    className="decrease-quantity"
                    onClick={() =>
                      dispatchHandler(
                        cartDispatch,
                        ACTION_TYPE.DECREASE_QUANTITY,
                        product
                      )
                    }
                    disabled={product.quantity === 1 ? true : false}
                  >
                    -
                  </button>
                </div>

                <div>
                  <span className="price">₹{product.price}</span>
                  <del className="price-tag original">
                    ₹{product.originalPrice}
                  </del>
                  <span className="price-tag discount">
                    {product.discount}% Off
                  </span>
                </div>
                <div className="delivery-date">
                  Delivery by{" "}
                  <span className="arrival-date">20th Feb 2022 </span>
                </div>
                <button
                  className="wishlist-btn outline-btn btn"
                  disabled={
                    wishlistState.find(
                      (wishlistItem) => wishlistItem._id === product._id
                    )
                      ? true
                      : false
                  }
                  onClick={() => {
                    dispatchHandler(
                      wishlistDispatch,
                      ACTION_TYPE.ADD_TO_WISHLIST,
                      product
                    );
                    dispatchHandler(
                      cartDispatch,
                      ACTION_TYPE.REMOVE_FROM_CART,
                      product
                    );
                  }}
                >
                  {wishlistState.find(
                    (wishlistItem) => wishlistItem._id === product._id
                  )
                    ? "Already in Wishlist"
                    : "Move to Wishlist"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
