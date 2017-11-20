import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { receiveItem } from './action';
import * as Api from './api';

// 1. worker saga
export function* callRequestItem(action) {
  console.log('worker saga');
  try {
    const result = yield call(
      Api.getItem, // or just replace with axios.get
      action.payload
    );
    console.log('result', result);
    yield put(receiveItem(result));
  } catch (err) {
    console.log('err', err);
  }
}

// 2. watcher saga
// spawn a new task on each Action

export default function* watchCertainModule() {
  console.log('saga is watching');
  yield takeEvery('REQUEST_ITEM', callRequestItem);
}
