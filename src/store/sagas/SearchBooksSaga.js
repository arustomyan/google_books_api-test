import { put, takeLatest } from "redux-saga/effects";
import {
  addBooks,
  addTotalItems,
  fetchBooksRequest,
  setIsLoadingBooks,
} from "../action";
import RestApi from "../../api/api";

export function* SearchBooksSaga(data) {
  try {
    yield put(setIsLoadingBooks(true));
    const response = yield RestApi.searchBooks(data.payload);
    yield put(addBooks(response.items));
    yield put(addTotalItems(response.totalItems));
    yield put(setIsLoadingBooks(false));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchBooksSaga() {
  yield takeLatest(fetchBooksRequest, SearchBooksSaga);
}
