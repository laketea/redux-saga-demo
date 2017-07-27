export function increment() {
  return {
    type: 'INCREMENT'
  }
}

export function decrement() {
  return {
    type: 'DECREMENT'
  }
}

export function incrementWaiting() {
  return {
    type: 'INCREMENT_WAITING'
  }
}

export function incrementError() {
  return {
    type: 'INCREMENT_ERROR'
  }
}

// 异步action
export function asyncIncrement(dispatch) {
  return function (dispatch, state) {
    dispatch(incrementWaiting())
    fetch()
    .then(function (){
      dispatch(increment());
    })
    .catch(function () {
      dispatch(incrementError());
    });
  }
}

// mock fetch
export function fetch() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve();
    }, 1000);
  });
}