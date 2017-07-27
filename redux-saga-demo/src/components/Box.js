import React from 'react';

export default function Box({ counter, scope, onIncrement, onDecrement }) {
  return (
    <div className="box">
      <h3>{scope}</h3>
      <div>
        <button onClick={() => { onIncrement(scope) }}>increment</button>
        <button onClick={() => { onDecrement(scope) }}>decrement</button>
      </div>
      <p>click times: {counter[scope]}</p>
    </div>
  )
}