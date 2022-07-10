import { createReducer } from "@reduxjs/toolkit";
import {
  addBooks,
  addTotalItems,
  changeCategories,
  changeQuery,
  changeSorting,
  resetBookList,
  setIsLoadingBooks,
  setIsSearching,
} from "./action";

const initialState = {
  bookList: [],
  queryApi: {
    query: "",
    startIndex: 0,
    categories: "",
    sorting: "relevance",
  },
  totalItems: 0,
  isSearching: false,
  isLoadingBooks: false,
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
  [changeCategories]: function (state, action) {
    state.queryApi.categories = action.payload;
  },
  [changeQuery]: function (state, action) {
    state.queryApi.query = action.payload;
  },
  [changeSorting]: function (state, action) {
    state.queryApi.sorting = action.payload;
  },
  [setIsLoadingBooks]: function (state, action) {
    state.isLoadingBooks = action.payload;
  },
});
