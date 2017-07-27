import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import './styles.css';

import reducer from './reducers'
import Root from './components/Root';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


function render() {
  ReactDOM.render(
    <Root
      store={store}
      state={store.getState()}
      dispatch={store.dispatch} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)