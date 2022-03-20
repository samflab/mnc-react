import { CartItems } from "../components/Cart/CartItems";
import { PriceCard } from "../components/Cart/PriceCard";
import "../components/Cart/Cart.css";
import { useCart } from "../context/cart-context";
import { EmptyCart } from "../components/Cart/EmptyCart";

export const Cart = () => {
  const { cartState } = useCart();
  return (
    <>
      {cartState.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {" "}
          <h3 className="page-heading cart-heading">Cart</h3>
          <div className="component-div cart-div">
            <CartItems />
            <PriceCard />
          </div>
        </>
      )}
    </>
  );
};
