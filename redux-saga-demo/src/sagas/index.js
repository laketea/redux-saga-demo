import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';

import { watchAndLog } from './log';
import { watchByTakeEvery } from './takeEvery';
import { watchAsyncByTakeEvery } from './async';
import { watchAsyncByTakeLatest } from './takeLatest';

// hello world
export function* helloSaga() {
  console.log('Hello Sagas!')
}

// 异步递增
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// 异步递增wather
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// 同步递增laster watcher
export function* watchLatestIncrementAsync() {
  yield takeLatest('LATEST_INCREMENT_ASYNC', incrementAsync)
}


//forker

// cancelled

// 同时执行多个任务
// yield all(call(),call());

// race
// yield race({
//  task: call(backgroundTask),
//  cancel: take('CANCEL_TASK')
// })

export default function* rootSaga() {
  yield all([
    helloSaga(),
    // watchLatestIncrementAsync(),
    // watchIncrementAsync(),
    watchAsyncByTakeEvery(),
    watchByTakeEvery(),
    watchAndLog(),
    watchAsyncByTakeLatest()
  ]);
}