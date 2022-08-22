import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  isLoading: false,
  selected: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    replaceNews(state, action) {
      state.news = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    getAllNews(state, action) {
      state.news = action.payload;
    },
    getSelectedNews(state, action) {
      state.selected = state.news.find((news) => news.id === action.payload);
    },
  },
});

export const { getAllNews, getSelectedNews, setLoading, replaceNews } =
  newsSlice.actions;
export default newsSlice.reducer;
