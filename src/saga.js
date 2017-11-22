import { all, fork } from "redux-saga/effects";
import certainSaga from "./certainSaga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([certainSaga()]);
}
