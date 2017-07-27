import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';

function* increment() {
  yield delay(2000);
  yield put({ type: 'INCREMENT', scope: 'async' });
}

function* decrement() {
  yield delay(2000);
  yield put({ type: 'DECREMENT', scope: 'async' });
}

// takeEvery 异步操作
export function* watchAsyncByTakeEvery() {
  yield all([
    takeEvery('INCREMENT_ASYNC', increment),
    takeEvery('DECREMENT_ASYNC', decrement)
  ]);
}

