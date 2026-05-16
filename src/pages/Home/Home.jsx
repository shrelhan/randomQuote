import Counter from '@/features/counter/components/Counter';
import RandomQuote from '@/features/quotes/components/RandomQuote';
import './Home.css';

function Home() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Interactive Quote & Counter</h1>
      </header>

      <div className="page-grid">
        <Counter />
        <RandomQuote />
      </div>
    </div>
  );
}

export default Home;
