import React from 'react';
import Box from './Box';
import * as actions from '../actions';

export default function Root({ state, dispatch }) {
  const counter = state.counter;
  const createAction = (action) => {
    return function(...args) {
      dispatch(action(...args));
    };
  };

  const CounterBox = ({ scope }) => {
    return (
      <Box 
        counter={counter}
        scope={scope}
        onIncrement={createAction(actions.increment)}
        onDecrement={createAction(actions.decrement)}
      />
    )
  }

  return (
    <div>
      <CounterBox scope="takeEvery" />
      <CounterBox scope="async" />
      <CounterBox scope="takeLatest" />
    </div>
  )
}