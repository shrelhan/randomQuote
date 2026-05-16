import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import CounterPage from '@/pages/Counter';
import QuotePage from '@/pages/Quote';
import '@/styles/globals.css';
import './App.css';

const THEME_STORAGE_KEY = 'project-01-theme';

function App() {
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    );
  }

  return (
    <Router>
      <MainLayout theme={theme} onThemeToggle={toggleTheme}>
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
