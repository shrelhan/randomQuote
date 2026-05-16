import Navigation from './Navigation';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <div className="layout-content">{children}</div>
    </div>
  );
}

export default MainLayout;
