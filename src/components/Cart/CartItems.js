import React from "react";
import { toast } from "react-toastify";
import { useCart, useWishlist } from "../../context";
import { dispatchHandler, ACTION_TYPE, presentItem } from "../../util";
import "./Cart.css";

export const CartItems = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  const moveToWishlist = (product) => {
    dispatchHandler(wishlistDispatch, ACTION_TYPE.ADD_TO_WISHLIST, product, toast.success("Moved to wishlist"));
    dispatchHandler(cartDispatch, ACTION_TYPE.REMOVE_FROM_CART, product, toast.success("Removed from cart"));
  };

  return (
    <>
      <div className="cart-product-container">
        {cartState.map((product) => {
          const inWishlist = presentItem(wishlistState, product);

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
                      product,
                      toast.success("Removed from cart")
                    )
                  }
                ></i>
              </div>

              <div className="card-content-hrz">
                <h4 className="card-title-hrz">{product.title}</h4>
                <p className="card-seller-hrz">by {product.author}</p>

                <div className="quantity">
                  <button
                    className="decrease-quantity"
                    onClick={() =>
                      dispatchHandler(
                        cartDispatch,
                        ACTION_TYPE.DECREASE_QUANTITY,
                        product,
                        toast.info("Quantity decreased")
                      )
                    }
                    disabled={product.quantity === 1}
                  >
                    -
                  </button>

                  <span className="quantity-wt">{product.quantity}</span>
                  <button
                    className="increase-quantity"
                    onClick={() =>
                      dispatchHandler(
                        cartDispatch,
                        ACTION_TYPE.INCREASE_QUANTITY,
                        product,
                        toast.info("Quantity increased")
                      )
                    }
                  >
                    +
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
                  disabled={inWishlist}
                  onClick={() => moveToWishlist(product)}
                >
                  {inWishlist ? "Already in Wishlist" : "Move to Wishlist"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
