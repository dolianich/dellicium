import styles from './SideBar.module.css';
import Navigation from './Navigation/Navigation';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.main}>
        <Logo type="full" />
        <Navigation />
      </div>
      <Profile />
    </div>
  );
};

export default SideBar;
