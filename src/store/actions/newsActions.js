import axios from "axios";
import { getAllNews, getSelectedNews, setLoading } from "../slices/newsSlice";

export const fetchAllNews = (category) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      `https://inshorts.deta.dev/news?category=${category}`
    );
    dispatch(getAllNews(response.data.data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
  }
};
