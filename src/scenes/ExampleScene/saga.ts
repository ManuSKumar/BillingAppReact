import { call, put, takeEvery } from "redux-saga/effects";
import { increment } from "./redux";

function* incrementSaga() {
  // Your saga logic here
  yield put(increment());
}

export function* watchIncrement() {
  yield takeEvery("example/incrementSaga", incrementSaga);
}
