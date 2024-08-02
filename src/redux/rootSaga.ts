import { all } from "redux-saga/effects";
import { watchIncrement } from "../scenes/ExampleScene/saga";

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    // Add other watchers here
  ]);
}
