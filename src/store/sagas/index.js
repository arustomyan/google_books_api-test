import { all } from "redux-saga/effects";
import { watchSearchBooksSaga } from "./SearchBooksSaga";

export default function* rootSaga() {
  yield all([watchSearchBooksSaga()]);
}
