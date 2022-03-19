import React from "react";
import {useWishlist} from "../../context/wishlist-context";

export const Product = (props) => {
  const {wishlistDispatch} = useWishlist()
  return (
    <>
      <div class="product" key={props.id}>
        <div class="product-img">
          <img src={props.img} alt={props.title} class="img" />
          <span class="" onClick={()=> wishlistDispatch({
            type: "ADD_TO_WISHLIST",
            payload: props,
          })}>
            <i class="far fa-bookmark bookmark"></i>
          </span>
        </div>
        <div class="card-body">
          <div class="product-name-container">
            <span class="product-name">{props.title}</span>

            <span class="rating" role="img">
              {props.rating}/5⭐
            </span>
          </div>
          <span class="author">by {props.author}</span>
          <div style={{ marginBlock: "1rem" }}>
            <span class="price-tag">₹{props.price}</span>
            <del class="price-tag original">₹{props.originalPrice}</del>
            <span class="price-tag discount">{props.discount}% Off</span>
          </div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </>
  );
};
