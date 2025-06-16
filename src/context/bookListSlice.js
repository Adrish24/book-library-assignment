import { createSlice } from "@reduxjs/toolkit";

const bookListSlice = createSlice({
  name: "bookList",
  initialState: {
    books: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    clearBooks: (state) => {
      state.books = [];
    },
  },
});

export const { setBooks, addBook, clearBooks } = bookListSlice.actions;
export default bookListSlice.reducer;
