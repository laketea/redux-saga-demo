import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';

function* increment() {
  yield delay(2000);
  yield put({ type: 'INCREMENT', scope: 'takeLatest' });
}

function* decrement() {
  yield delay(2000);
  yield put({ type: 'DECREMENT', scope: 'takeLatest' });
}

// takeEvery 异步操作
export function* watchAsyncByTakeLatest() {
  yield all([
    takeLatest('INCREMENT_TAKELATEST', increment),
    takeLatest('DECREMENT_TAKELATEST', decrement)
  ]);
}

