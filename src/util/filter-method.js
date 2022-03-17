const filterMethod = (state, data) => {
    let temp = [...data];
  
    //Price: High to Low Sorting
    if (state.priceSort === "HIGH-TO-LOW-PRICE")
      temp = temp.sort((curr, prev) => prev.price - curr.price);
  
    //Price: Low to High Sorting
    if (state.priceSort === "LOW-TO-HIGH-PRICE")
      temp = temp.sort((curr, prev) => curr.price - prev.price);
  
    //Price Range
    if (state.range) temp = temp.filter((i) => i.price <= state.range);
  
    //Rating: High to Low Sorting
    if (state.ratingSort === "HIGH-TO-LOW-RATING")
      temp = temp.sort((curr, prev) => prev.rating - curr.rating);
  
    //Rating: High to Low Sorting
    if (state.ratingSort === "LOW-TO-HIGH-RATING")
      temp = temp.sort((curr, prev) => curr.rating - prev.rating);
  
    //Category Filtering
    if (state.category.length > 0)
      temp = temp.filter((item) => state.category.includes(item.category));
  
    return temp;
  };
  export { filterMethod };
  