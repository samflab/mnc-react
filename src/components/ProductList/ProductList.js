import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Filter from "./Filter";
import { useWishlist } from "../../context/wishlist-context";
import "./Filter.css";
import { useFilter } from "../../context/filter-context";
import { filterMethod } from "../../util/filter-method";
import { useCart } from "../../context/cart-context";

export const ProductList = () => {
  const { state } = useFilter();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  const [product, setProduct] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("/api/products");
    const data = response.data.products;
    setProduct(data);
    return data;
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterData = filterMethod(state, product);

  return (
    <>
      <Filter />
      <div className="product-list-container">
        {filterData.map((filterProduct) => {
          return (
            <div class="product" key={filterProduct.id}>
              <div class="product-img">
                <img
                  src={filterProduct.img}
                  alt={filterProduct.title}
                  class="img"
                />
                {wishlistState.find(
                  (wishlistItem) => wishlistItem._id === filterProduct._id
                ) ? (
                  <span
                    key={filterProduct._id}
                    className=""
                    onClick={() =>
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: filterProduct,
                      })
                    }
                  >
                    <i className="far fa-times-circle close bookmark"></i>
                  </span>
                ) : (
                  <span
                    key={filterProduct._id}
                    class=""
                    onClick={() =>
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: filterProduct,
                      })
                    }
                  >
                    <i class="far fa-bookmark bookmark"></i>
                  </span>
                )}
              </div>
              <div class="card-body">
                <div class="product-name-container">
                  <span class="product-name">{filterProduct.title}</span>

                  <span class="rating" role="img">
                    {filterProduct.rating}/5⭐
                  </span>
                </div>
                <span class="author">by {filterProduct.author}</span>
                <div style={{ marginBlock: "1rem" }}>
                  <span class="price-tag">₹{filterProduct.price}</span>
                  <del class="price-tag original">
                    ₹{filterProduct.originalPrice}
                  </del>
                  <span class="price-tag discount">
                    {filterProduct.discount}% Off
                  </span>
                </div>
                <button
                  class="add-to-cart"
                  onClick={() =>
                    cartDispatch({
                      type: "ADD_TO_CART",
                      payload: filterProduct,
                    })
                  }
                >
                  {
                    cartState.find((cartItem)=>cartItem._id === filterProduct._id) ?
                    "Go to Cart": "Add to Cart"
                  }
                 
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
