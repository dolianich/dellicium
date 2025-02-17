import styles from './MobNav.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../SideBar/Navigation/Navigation';
import CloseBtn from './CloseBtn/CloseBtn';
import { useState } from 'react';

const MobNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.wrapper}>
        <Logo onClick={openMenu} />
        <CloseBtn onClick={openMenu} state={isOpen} />
      </div>
      <div className={isOpen ? styles.menuContainer : styles.menuClosed}>
        <div className={styles.nav}>
          <Navigation onClick={openMenu} direction="vertical" type="grid" />
        </div>
      </div>
    </>
  );
};

export default MobNav;
