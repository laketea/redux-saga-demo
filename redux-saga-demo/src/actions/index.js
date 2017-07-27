export function increment(scope) {
  return {
    type: `INCREMENT_${scope.toUpperCase()}`,
    scope
  }
}

export function decrement(scope) {
  return {
    type: `DECREMENT_${scope.toUpperCase()}`,
    scope
  }
}

export function incrementWaiting(scope) {
  return {
    type: 'INCREMENT_WAITING',
    scope
  }
}

export function incrementError(scope) {
  return {
    type: 'INCREMENT_ERROR',
    scope
  }
}

// fetch mock
export function fetch() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve();
    }, 1000);
  });
}