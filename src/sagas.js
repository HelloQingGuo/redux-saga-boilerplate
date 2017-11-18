import { all } from 'redux-saga/effects';
import axios from 'axios';
import watchCertainModule from './certainSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    //helloSaga(),
    watchCertainModule()
  ]);
}
