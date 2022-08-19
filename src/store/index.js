import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: { news: NewsSlice },
});
