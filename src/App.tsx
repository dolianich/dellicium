import SideBar from './components/SideBar/SideBar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage';
import AssetsPage from './pages/AssetsPage';
import MarketPage from './pages/MarketPage';
import CreatorsPage from './pages/CreatorsPage';
import NotificationsPage from './pages/NotificationsPage';
import NotFoundPage from './pages/NotFoundPage';
import CreatorPage from './pages/CreatorPage';
import WishlistPage from './pages/WishlistPage';
import MobNav from './components/MobNav/MobNav';

function App() {
  return (
    <Router>
      <SideBar />
      <MobNav />
      <Routes>
        <Route path="/" element={<Navigate to="discover" />} />
        <Route path="/discover" Component={DiscoverPage} />
        <Route path="*" Component={NotFoundPage} />
        <Route path="/assets" Component={AssetsPage} />
        <Route path="/market" Component={MarketPage} />
        <Route path="/creators" Component={CreatorsPage} />
        <Route path="/notifications" Component={NotificationsPage} />
        <Route path="/creators/:creatorId" element={<CreatorPage />} />
        <Route
          path="/creators/:creatorId/wishlist"
          element={<WishlistPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
