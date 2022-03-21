import { Link } from "react-router-dom";
import "./Cart.css";

export const EmptyCart = () => {
  return (
    <div className="page-heading-center">
      <h2>Your cart is empty</h2>
      <br />
      <p className="wishlist-para">Fill in your shopping bag now!</p>

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
