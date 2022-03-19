import { CartItems } from "../components/Cart/CartItems";
import { PriceCard } from "../components/Cart/PriceCard";
import "../components/Cart/Cart.css";

export const Cart = () => {
  return (
    <>
      <h3 className="page-heading cart-heading">Cart</h3>

      <div className="component-div cart-div">
        <CartItems />
        <PriceCard />
      </div>
    </>
  );
};
