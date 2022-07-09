import { createAction } from "@reduxjs/toolkit";

export const addBooks = createAction("ADD_BOOKS");
export const addTotalItems = createAction("ADD_TOTAL_ITEMS");
export const resetBookList = createAction("RESET_BOOK_LIST");
export const setIsSearching = createAction("SET_IS_SEARCHING");

export const fetchBooksRequest = createAction("FETCH_BOOKS_REQUEST");
