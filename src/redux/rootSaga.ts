import { all } from "redux-saga/effects";
import { watchIncrement } from "../scenes/ExampleScene/saga";
import { watchAuthSaga } from "../scenes/auth/saga";

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchAuthSaga(),
    // Add other watchers here
  ]);
}
