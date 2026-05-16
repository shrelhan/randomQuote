import Counter from './components/counter/Counter';
import RandomQuote from './components/quote/RandomQuote';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="page">
        <header className="page-header">
          <h1 className="page-title">Interactive Quote & Counter</h1>
        </header>

        <div className="page-grid">
          <section className="card">
            <Counter />
          </section>

          <RandomQuote />
        </div>
      </div>
    </div>
  );
}

export default App;
