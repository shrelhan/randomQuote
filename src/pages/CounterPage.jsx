import * as React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import '../styles/counter.css';

function CounterPage() {
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

export default CounterPage;
