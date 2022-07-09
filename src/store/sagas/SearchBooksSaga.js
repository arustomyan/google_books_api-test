import { put, takeLatest } from "redux-saga/effects";
import { addBooks, addTotalItems, fetchBooksRequest } from "../action";
import RestApi from "../../api/api";

export function* SearchBooksSaga(data) {
  try {
    const response = yield RestApi.searchBooks(data.payload);
    yield put(addBooks(response.items));
    yield put(addTotalItems(response.totalItems));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchBooksSaga() {
  yield takeLatest(fetchBooksRequest, SearchBooksSaga);
}
