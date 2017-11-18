import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// 1. worker saga
export function* certainAsyncCall(action) {
  console.log('worker saga');
  try {
    console.log('async call');
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com',
      {
        id: action.payload
      }
    );
    console.log('response', response);
  } catch (e) {
    console.log('err', e);
  }
}

// 2. watcher saga
// spawn a new task on each Action

export default function* watchCertainModule() {
  console.log('saga is watching');
  yield takeLatest('certainActionType', certainAsyncCall);
}
