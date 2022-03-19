import axios from "axios";

export const getCategory = async () =>{
    const response = await axios.get("/api/categories");
    const data = response.data.categories;
    return data;
}