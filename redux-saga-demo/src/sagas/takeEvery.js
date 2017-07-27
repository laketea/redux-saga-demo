import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';

function* increment() {
  yield put({ type: 'INCREMENT', scope: 'takeEvery' });
}

function* decrement() {
  yield put({ type: 'DECREMENT', scope: 'takeEvery' });
}

// takeEvery wather
export function* watchByTakeEvery() {
  yield all([
    takeEvery('INCREMENT_TAKEEVERY', increment),
    takeEvery('DECREMENT_TAKEEVERY', decrement)
  ]);
}

