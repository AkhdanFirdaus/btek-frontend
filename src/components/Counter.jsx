import React from 'react';

function Counter() {
  const [count, setCounter] = React.useState(1);

  const increment = () => {
    setCounter(count >= 10 ? count : count + 1);
  };

  const decrement = () => {
    setCounter(count <= 1 ? count : count - 1);
  };

  return (
    <div>
      <button type="button" onClick={decrement}>-</button>
      {count}
      <button type="button" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
