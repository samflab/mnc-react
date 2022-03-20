import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div class="page-heading-center">
      <h2>Your cart is empty</h2>
      <br />
      <p class="wishlist-para">Fill in your shopping bag now!</p>

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
