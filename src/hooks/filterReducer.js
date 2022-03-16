export const filterReducer = (state, action) => {
    switch (action.type) {
      case "PRICE_SORT":
        return { ...state, priceSort: action.payload };
  
      case "RATING_SORT":
          return {...state, ratingSort: action.payload};
          
      case "CATEGORY":
        const checkCategory = state.category.includes(action.payload);
        return checkCategory
          ? {
              ...state,
              category: state.category.filter((i) => i !== action.payload),
            }
          : {
              ...state,
              category: [...state.category, action.payload],
            };
      case "PRICE_RANGE":
          return{
              ...state,
              range: action.payload,
          }
      case "CLEAR_FILTER":
          return {
              ...state,
              priceSort:"",
              ratingSort: "",
              category: [],
              range: 2000,
          }
      default:
        return state;
    }
  };
  