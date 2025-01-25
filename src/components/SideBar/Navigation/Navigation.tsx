import styles from './Navigation.module.css';
import {
  SquaresFour,
  Bell,
  UsersThree,
  Storefront,
  Toolbox,
} from '@phosphor-icons/react';
import NavButton from './NavButton/NavButton';

const navButtons = [
  { id: 1, text: 'Discover', icon: SquaresFour, link: '/', size: 20 },
  {
    id: 2,
    text: 'Notifications',
    icon: Bell,
    link: '/notifications',
    size: 20,
  },
  { id: 3, text: 'Models', icon: UsersThree, link: '/models', size: 20 },
  { id: 4, text: 'Market', icon: Storefront, link: '/market', size: 20 },
  { id: 5, text: 'Assets', icon: Toolbox, link: '/assets', size: 20 },
];

const Navigation = () => {
  return (
    <ul className={styles.navUl}>
      {navButtons.map((button) => (
        <NavButton
          key={button.id}
          link={button.link}
          text={button.text}
          icon={button.icon}
          size={button.size}
        />
      ))}
    </ul>
  );
};

export default Navigation;
