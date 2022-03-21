import React from "react";
import { Link } from "react-router-dom";

export const EmptyWishlist = () => {
  return (
    <div className="page-heading-center">
      <h2>Empty Wishlist</h2>
      <br />
      <p className="wishlist-para">Bookmark your manga now!</p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
        alt="shopping bag"
        className="shopping-bag"
      />
      <Link to="/products">
        <button className="wishlist-btn shopping-btn">Lets Go Shopping</button>
      </Link>
    </div>
  );
};
