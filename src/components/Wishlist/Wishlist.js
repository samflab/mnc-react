import React from "react";
import { useCart, useWishlist } from "../../context";
import { EmptyWishlist } from "./EmptyWishlist";
import "./Wishlist.css";
import { ACTION_TYPE, dispatchHandler, presentItem } from "../../util";
import { ProductCard } from "../ProductList/ProductCard";
import { toast } from "react-toastify";

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      <h2 className="page-heading">Wishlist</h2>

      {wishlistState.length === 0 ? <EmptyWishlist /> : ""}
      <div className="wishlist-container">
        {wishlistState.map((product) => {
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
              inCart={inCart}
              addToWishlist={() =>
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.ADD_TO_WISHLIST,
                  product,
                  toast.success("Added to wishlist")
                )
              }
              removeFromWishlist={() =>
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.REMOVE_FROM_WISHLIST,
                  product,
                  toast.success("Removed from wishlist")
                )
              }
              addToCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.ADD_TO_CART,
                  product,
                  toast.success("Added to cart")
                )
              }
              removeFromCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.REMOVE_FROM_CART,
                  product,
                  toast.success("Removed from cart")
                )
              }
              moveToCart={() => {
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.ADD_TO_CART,
                  product,
                  toast.success("Moved to cart")
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
    </>
  );
};
