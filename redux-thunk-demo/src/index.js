import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import Counter from './Counter'
import reducer from './reducers'
import { asyncIncrement, increment, decrement } from './actions';

const store = createStore(reducer, applyMiddleware(thunk))

const dispatch =store.dispatch;

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => dispatch(increment())}
      onDecrement={() => dispatch(decrement())} 
      onAsyncIncrement={() => dispatch(asyncIncrement())} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)