import Navigation from '../components/Navigation';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <div className="layout-content">{children}</div>
    </div>
  );
}

export default Layout;
