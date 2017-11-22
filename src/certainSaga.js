import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import { receiveItem } from "./action";
import * as Api from "./api";

// 1. worker saga
function* callRequestItem(action) {
  console.log("callRequestItem 1");
  try {
    const result = yield call(
      Api.getItem, // or just replace with axios.get
      action.payload
    );
    console.log("result", result);
    yield put(receiveItem(result));
  } catch (err) {
    console.log("err", err);
  }
}

// 2. watcher saga
// spawn a new task on each Action

export default function* watchReqItem() {
  console.log("saga is watching 1 and 2");
  yield all([
    takeEvery("REQUEST_ITEM", callRequestItem),
    takeEvery("REQUEST_ITEM_2", callRequestItem2)
  ]);
}

function* callRequestItem2(action) {
  console.log("callRequestItem2");
  // ...
}
