import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { EmptyWishlist } from "./EmptyWishlist";
import "./Wishlist.css";
import { dispatchHandler } from "../../util/dispatchHandler";
import { ACTION_TYPE } from "../../util/actionType";
import { presentItem } from "../../util/presentItem";
import { ProductCard } from "../ProductList/ProductCard";

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      <h2 class="page-heading">Wishlist</h2>

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
                dispatchHandler(cartDispatch, ACTION_TYPE.ADD_TO_CART, product)
              }
              removeFromCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.REMOVE_FROM_CART,
                  product
                )
              }
              moveToCart={() => {
                dispatchHandler(cartDispatch, ACTION_TYPE.ADD_TO_CART, product);
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
