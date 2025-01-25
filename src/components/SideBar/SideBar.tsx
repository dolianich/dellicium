import styles from './SideBar.module.css';
import Navigation from './Navigation/Navigation';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Navigation />
    </div>
  );
};

export default SideBar;
