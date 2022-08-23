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
    replaceSelected(state, action) {
      state.selected = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    getAllNews(state, action) {
      state.news = action.payload;
      localStorage.setItem("news", JSON.stringify(state.news));

    },
    getSelectedNews(state, action) {
      state.selected = state.news.find((news) => news.id === action.payload);
      localStorage.setItem("selectedNews", JSON.stringify(state.selected));
    },
  },
});

export const {
  getAllNews,
  getSelectedNews,
  setLoading,
  replaceNews,
  replaceSelected,
} = newsSlice.actions;
export default newsSlice.reducer;
