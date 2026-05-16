import * as React from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <div className="counter-value">Count: {count}</div>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
