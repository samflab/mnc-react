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
    <div class="product" key={id}>
      <div class="product-img">
        <img src={img} alt={title} class="img" />
        {atWishlist ? (
          <span onClick={() => removeFromWishlist()}>
            <i className="far fa-times-circle close bookmark"></i>
          </span>
        ) : !inWishlist ? (
          <span onClick={() => addToWishlist()}>
            <i class="far fa-bookmark bookmark"></i>
          </span>
        ) : (
          <span onClick={() => removeFromWishlist()}>
            <i className="far fa-times-circle close bookmark"></i>
          </span>
        )}
      </div>
      <div class="card-body">
        <div class="product-name-container">
          <span class="product-name">{title}</span>

          <span class="rating" role="img">
            {rating}/5⭐
          </span>
        </div>
        <span class="author">by {author}</span>
        <div class="price-div">
          <span class="price-tag">₹{price}</span>
          <del class="price-tag original">₹{originalPrice}</del>
          <span class="price-tag discount">{discount}% Off</span>
        </div>
        <button
          class="add-to-cart"
          onClick={() => clickHandler()}
          disabled={inCart}
        >
          {buttonNameHandler()}
        </button>
      </div>
    </div>
  );
};
