import axios from "axios";
import { useQuery } from "react-query";

export const useComments = (slug: string) => {
  return useQuery("comments", async () => {
    const {data} = await axios.get(`/api/comments?slug=${slug}`);
    return data;
  });
};