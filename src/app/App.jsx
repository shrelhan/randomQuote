import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import CounterPage from '@/pages/Counter';
import QuotePage from '@/pages/Quote';
import '@/styles/globals.css';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </div>
      </MainLayout>
    </Router>
  );
}

export default App;
