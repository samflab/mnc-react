import React from "react";
import { Link } from "react-router-dom";


export const EmptyWishlist = () => {
  return (
    <div class="page-heading-center">
      <h2>Empty Wishlist</h2>
      <br />
      <p class="wishlist-para">
        Bookmark your manga now!
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
        alt="shopping bag"
        class="shopping-bag"
      />
      <Link to="/products">
      <button class="wishlist-btn">Lets Go Shopping</button>
      </Link>
    </div>
  );
};
