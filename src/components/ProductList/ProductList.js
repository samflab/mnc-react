import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Filter from "./Filter";
import "./Filter.css";
import { useFilter } from "../../context/filter-context";
import { filterMethod } from "../../util/filter-method";
import { ProductCard } from "./ProductCard";
import { dispatchHandler } from "../../util/dispatchHandler";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { ACTION_TYPE } from "../../util/actionType";
import { presentItem } from "../../util/presentItem";

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
          const inWishlist = presentItem(wishlistState, filterProduct);
          const inCart = presentItem(cartState, filterProduct);
          return (
            <ProductCard
              key={filterProduct._id}
              id={filterProduct._id}
              img={filterProduct.img}
              title={filterProduct.title}
              rating={filterProduct.rating}
              author={filterProduct.author}
              price={filterProduct.price}
              originalPrice={filterProduct.originalPrice}
              discount={filterProduct.discount}
              inWishlist={inWishlist}
              inCart={inCart}
              addToWishlist={() =>
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.ADD_TO_WISHLIST,
                  filterProduct
                )
              }
              removeFromWishlist={() =>
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.REMOVE_FROM_WISHLIST,
                  filterProduct
                )
              }
              addToCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.ADD_TO_CART,
                  filterProduct
                )
              }
              removeFromCart={() =>
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.REMOVE_FROM_CART,
                  filterProduct
                )
              }
              moveToCart={() => {
                dispatchHandler(
                  cartDispatch,
                  ACTION_TYPE.ADD_TO_CART,
                  filterProduct
                );
                dispatchHandler(
                  wishlistDispatch,
                  ACTION_TYPE.REMOVE_FROM_WISHLIST,
                  filterProduct
                );
              }}
            />
          );
        })}
      </div>
    </>
  );
};
