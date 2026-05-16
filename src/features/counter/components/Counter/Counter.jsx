import * as React from 'react';
import Button from '@/shared/components/Button';
import Card from '@/shared/components/Card';
import './Counter.css';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <Card>
      <h2 className="hero">Counter</h2>
      <div className="counter">
        <div className="counter-value">Count: {count}</div>
        <Button variant="success" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>
    </Card>
  );
}

export default Counter;
