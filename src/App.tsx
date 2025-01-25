import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage';
import AssetsPage from './pages/AssetsPage';
import MarketPage from './pages/MarketPage';
import ModelsPage from './pages/ModelsPage';
import NotificationsPage from './pages/NotificationsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" Component={DiscoverPage} />
        <Route path="*" Component={NotFoundPage} />
        <Route path="/assets" Component={AssetsPage} />
        <Route path="/market" Component={MarketPage} />
        <Route path="/models" Component={ModelsPage} />
        <Route path="/notifications" Component={NotificationsPage} />
      </Routes>
    </Router>
  );
}

export default App;
