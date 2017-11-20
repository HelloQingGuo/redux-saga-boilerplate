import { all, fork } from 'redux-saga/effects';
import * as certainSaga from './certainSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all(
    [
      ...Object.values(certainSaga)
      // ...Object.values(userSagas),
      // ...Object.values(anotherSagas)
    ].map(fork)
  );
}

// export function* rootSaga() {
//   yield all([...Object.values(uiSagas), ...Object.values(userSagas)].map(fork));
// }
