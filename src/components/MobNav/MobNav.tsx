import styles from './MobNav.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../SideBar/Navigation/Navigation';
import CloseBtn from './CloseBtn/CloseBtn';

const MobNav = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Logo />
        <CloseBtn onClick={() => console.log('close')} />
      </div>
      <div className={styles.menuContainer}>
        <Navigation />
      </div>
    </>
  );
};

export default MobNav;
