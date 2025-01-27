import styles from './SideBar.module.css';
import Navigation from './Navigation/Navigation';
import Logo from '../Logo/Logo';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default SideBar;
