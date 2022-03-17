import React from "react";

export const Product = (props) => {
  return (
    <>
      <div class="product">
        <div class="product-img">
          <img src={props.img} alt={props.title} class="img" />
          <span class="">
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
