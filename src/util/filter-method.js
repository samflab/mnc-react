const filterMethod = (state, data) => {
    let temp = [...data];
  
    //Price: High to Low Sorting
    if (state.priceSort === "high-to-low-price")
      temp = temp.sort((curr, prev) => prev.price - curr.price);
  
    //Price: Low to High Sorting
    if (state.priceSort === "low-to-high-price")
      temp = temp.sort((curr, prev) => curr.price - prev.price);
  
    //Price Range
    if (state.range) temp = temp.filter((i) => i.price <= state.range);
  
    //Rating: High to Low Sorting
    if (state.ratingSort === "high-to-low-rating")
      temp = temp.sort((curr, prev) => prev.rating - curr.rating);
  
    //Rating: High to Low Sorting
    if (state.ratingSort === "low-to-high-rating")
      temp = temp.sort((curr, prev) => curr.rating - prev.rating);
  
    //Category Filtering
    if (state.category.length > 0)
      temp = temp.filter((item) => state.category.includes(item.category));
  
    return temp;
  };
  export { filterMethod };
  