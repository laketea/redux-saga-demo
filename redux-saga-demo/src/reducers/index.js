import { combineReducers } from 'redux';

function counter(state = {}, action) {
  const { type, scope } = action;
  const scopeState = state[scope] || 0;
  switch (type) {
    case 'INCREMENT':
      return { ...state, [scope]: scopeState + 1 }
    case 'DECREMENT':
      return { ...state, [scope]: scopeState - 1 }
    default:
      return state
  }
}

const reducers = combineReducers({
  counter
});

export default reducers;