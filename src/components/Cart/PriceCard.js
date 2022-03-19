import { useCart } from "../../context/cart-context";

export const PriceCard = () => {
    const {cartState} = useCart();

    let totalPricetoPay = cartState.reduce((sum, curr)=>sum + curr.quantity * curr.price, 0)
    console.log(totalPricetoPay);

    let totalMRP = cartState.reduce((mrp, curr)=> mrp + curr.quantity * curr.originalPrice, 0);

    let totalDiscount = cartState.reduce((discount, curr)=> discount + curr.quantity * (curr.originalPrice - curr.price), 0);

  return (
    <div className="price-details-conatiner">
      <div className="coupon-container">
        <div className="coupon-detail-title hd">Coupons</div>
        <div className="coupon-status mrp">No coupons applied</div>
        <button className="outline-btn btn coupon-btn">apply coupons</button>
      </div>

      <div className="price-detail-title hd">
        <span>
          Price Details <span>(1 item)</span>
        </span>
      </div>
      <div className="mrp-tab">
        <div className="total-mrp mrp">
          <span>Total MRP</span> <span>₹{totalMRP}</span>
        </div>

        <div className="mrp discount">
          <span>Discount on MRP</span> <span>- ₹{totalDiscount}</span>
        </div>

        <div className="mrp">
          <span className="coupon-discount">Coupon Discount</span>
        </div>
        <hr/>
        <div className="mrp">
         <b> <span>Total</span></b> <b><span>₹{totalPricetoPay}</span></b>
        </div>
      </div>
      <button className="checkout-btn btn">Checkout</button>
    </div>
  );
};
