import { put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';

// 日志watcher
export function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()
    console.log('action', action, 'after state: ', state.counter);
  })
}