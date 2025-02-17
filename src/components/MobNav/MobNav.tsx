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
        {isOpen ? <CloseBtn onClick={openMenu} /> : <></>}
      </div>
      <div className={isOpen ? styles.menuContainer : styles.menuClosed}>
        <div className={styles.nav}>
          <Navigation onClick={openMenu}/>
        </div>
      </div>
    </>
  );
};

export default MobNav;
