import React from 'react';

const Example = (props) => {
  const { acount, onIncrease } = props;
  return (
    <div>
      Count: {{ acount }}
      <Button onClick={onIncrease}>+</Button>
      <Button onClick={onDecrease}>-</Button>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
