import axios from "axios";
import { useQuery } from "react-query";

export const usePosts = (slug: string | null = null) => {
  return useQuery("posts", async () => {
    const {data} = await axios.get(`/api/posts?cat=${slug}`);
    return data;
  });
};