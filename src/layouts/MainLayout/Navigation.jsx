import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ theme, onThemeToggle }) {
  const isDark = theme === 'dark';

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">
            shrelhan
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="nav-link">
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quote" className="nav-link">
              Quote
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          aria-pressed={isDark}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {isDark ? '☀' : '☾'}
          </span>
          <span>{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
