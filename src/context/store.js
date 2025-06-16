import { configureStore } from "@reduxjs/toolkit";
import bookListSlice from "./bookListSlice";

const store = configureStore({
  reducer: {
    books: bookListSlice,
  },
});

export default store;
