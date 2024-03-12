import axios from "axios";
import { useQuery } from "react-query";

export const useCategories = () => {
  return useQuery("categories", async () => {
    const {data} = await axios.get("/api/categories");
    return data;
  });
};