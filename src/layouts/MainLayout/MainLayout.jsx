import Navigation from './Navigation';
import './MainLayout.css';

function MainLayout({ children, theme, onThemeToggle }) {
  return (
    <div className="layout">
      <Navigation theme={theme} onThemeToggle={onThemeToggle} />
      <div className="layout-content">{children}</div>
    </div>
  );
}

export default MainLayout;
