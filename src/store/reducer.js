import { createReducer } from "@reduxjs/toolkit";
import {
  addBooks,
  addTotalItems,
  resetBookList,
  setIsSearching,
} from "./action";

const initialState = {
  bookList: [],
  totalItems: 0,
  isSearching: false,
  categories: "",
  sorting: "",
};

export default createReducer(initialState, {
  [addBooks]: function (state, action) {
    state.bookList = [...state.bookList, ...action.payload];
  },
  [resetBookList]: function (state) {
    state.bookList = [];
  },
  [addTotalItems]: function (state, action) {
    state.totalItems = action.payload;
  },
  [setIsSearching]: function (state, action) {
    state.isSearching = action.payload;
  },
});
