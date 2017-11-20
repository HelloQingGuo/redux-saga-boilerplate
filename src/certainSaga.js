import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { receiveItem } from './action';
import { getItem } from './api';

// 1. worker saga
export function* callRequestItem(action) {
  console.log('worker saga');
  const result = yield call(
    getItem,
    `https://jsonplaceholder.typicode.com/posts/${action.payload}`
  );
  console.log('result', result);
  yield put(receiveItem(result));
}

// 2. watcher saga
// spawn a new task on each Action

export default function* watchCertainModule() {
  console.log('saga is watching');
  yield takeEvery('REQUEST_ITEM', callRequestItem);
}
