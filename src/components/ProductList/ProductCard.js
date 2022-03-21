import { useLocation } from "react-router";

export const ProductCard = (props) => {
  const {
    id,
    title,
    img,
    rating,
    author,
    price,
    originalPrice,
    discount,
    inCart,
    inWishlist,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    moveToCart,
  } = props;
  const location = useLocation();

  const atWishlist = location.pathname === "/wishlist";

  const clickHandler = () => {
    if (atWishlist) {
      moveToCart();
    } else {
      if (!inCart) {
        addToCart();
      }
    }
  };

  const buttonNameHandler = () => {
    if (atWishlist) {
      if (inCart) {
        return "Go to Cart";
      }
      return "Move to Cart";
    }

    if (inCart) {
      return "Go to Cart";
    } else {
      return "Add to Cart";
    }
  };

  return (
    <div className="product" key={id}>
      <div className="product-img">
        <img src={img} alt={title} className="img" />
        {atWishlist ? (
          <span onClick={() => removeFromWishlist()}>
            <i className="far fa-times-circle close bookmark"></i>
          </span>
        ) : !inWishlist ? (
          <span onClick={() => addToWishlist()}>
            <i className="far fa-bookmark bookmark"></i>
          </span>
        ) : (
          <span onClick={() => removeFromWishlist()}>
            <i className="far fa-times-circle close bookmark"></i>
          </span>
        )}
      </div>
      <div className="card-body">
        <div className="product-name-container">
          <span className="product-name">{title}</span>

          <span className="rating" role="img">
            {rating}/5⭐
          </span>
        </div>
        <span className="author">by {author}</span>
        <div className="price-div">
          <span className="price-tag">₹{price}</span>
          <del className="price-tag original">₹{originalPrice}</del>
          <span className="price-tag discount">{discount}% Off</span>
        </div>
        <button
          className="add-to-cart"
          onClick={() => clickHandler()}
          disabled={inCart}
        >
          {buttonNameHandler()}
        </button>
      </div>
    </div>
  );
};
