import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { EmptyWishlist } from "./EmptyWishlist";
import "./Wishlist.css";
import { dispatchHandler } from "../../util/dispatchHandler";
import { ACTION_TYPE } from "../../util/dispatchData";
import { presentItem } from "../../util/presentItem";

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  const moveToCart = (product) => {
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
  }
  return (
    <>
      <h2 class="page-heading">Wishlist</h2>

      {wishlistState.length === 0 ? <EmptyWishlist /> : ""}
      <div className="wishlist-container">
        {wishlistState.map((product) => {
          const inCart = presentItem(cartState, product);
          return (
            <div className="product" key={product._id}>
              <div className="product-img">
                <img src={product.img} alt={product.title} className="img" />
                <span
                  className=""
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
                  disabled={inCart}
                  onClick={() => moveToCart(product)}
                >
                  {inCart ? "Already in Cart" : "Move to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
