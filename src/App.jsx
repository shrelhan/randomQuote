import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import CounterPage from './pages/CounterPage';
import QuotePage from './pages/QuotePage';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
