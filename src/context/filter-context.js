import {createContext, useContext, useReducer} from "react"
import { filterReducer } from "../hooks/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, {
        priceSort: "",
        category: [],
        ratingSort: "",
        range: 2000
    });
    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter }