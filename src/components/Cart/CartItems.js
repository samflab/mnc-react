import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "./Cart.css";
export const CartItems = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  console.log(cartState);

  return (
    <>
      <h3 className="page-heading">Cart</h3>

      <div>
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
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    })
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
                      cartDispatch({
                        type: "INCREASE_QUANTITY",
                        payload: product,
                      })
                    }
                  >
                    +
                  </button>
                  <span className="quantity-wt">{product.quantity}</span>
                  <button
                    className="decrease-quantity"
                    onClick={() =>
                      cartDispatch({
                        type: "DECREASE_QUANTITY",
                        payload: product,
                      })
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
                  onClick={() =>
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    })
                  }
                >
                  Move to Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
