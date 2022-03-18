import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import { EmptyWishlist } from "./EmptyWishlist";
import "./Wishlist.css"

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();

  if(wishlistState.length === 0){
      return <EmptyWishlist/>
  }
  return (
    <>
    <h2 class="page-heading">Wishlist</h2>
      {wishlistState.map((product) => {
        const discount = Math.ceil(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        );
        return <div className="product" key={product._id}>
        <div className="product-img">
          <img src={product.img} alt={product.title} className="img" />
          <span className="" onClick={()=> wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: product,
          })}>
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
            <del className="price-tag original">₹{product.originalPrice}</del>
            <span className="price-tag discount">{discount}% Off</span>
          </div>
          <button className="add-to-cart">Move to Cart</button>
        </div>
      </div>
      })}
    </>
  );
};
