import styles from './MobNav.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../SideBar/Navigation/Navigation';
import CloseBtn from './CloseBtn/CloseBtn';
import { useState, useEffect } from 'react';
import Profile from '../Profile/Profile';

const MobNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 76) {
        if (currentScrollPos > prevScrollPos) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    if (isOpen) {
      window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isOpen]);

  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`${styles.wrapper} ${
          isTransparent ? styles.transparent : ''
        }`}
      >
        <Logo onClick={openMenu} />
        <CloseBtn onClick={openMenu} state={isOpen} />
      </div>
      <div className={isOpen ? styles.menuContainer : styles.menuClosed}>
        <div className={styles.nav}>
          <Navigation onClick={openMenu} direction="vertical" type="grid" />
          <div className={styles.wallet}>
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobNav;
