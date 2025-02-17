import styles from './Navigation.module.css';
import {
  SquaresFour,
  Bell,
  UsersThree,
  Storefront,
  Toolbox,
} from '@phosphor-icons/react';
import NavButton from './NavButton/NavButton';
import { useLocation } from 'react-router-dom';

interface Props{
    onClick?: () => void;
}

const navButtons = [
  { id: 1, text: 'Discover', icon: SquaresFour, link: '/discover', size: 20 },
  {
    id: 2,
    text: 'Notifications',
    icon: Bell,
    link: '/notifications',
    size: 20,
  },
  { id: 3, text: 'Creators', icon: UsersThree, link: '/creators', size: 20 },
  { id: 4, text: 'Market', icon: Storefront, link: '/market', size: 20 },
  { id: 5, text: 'Assets', icon: Toolbox, link: '/assets', size: 20 },
];

const Navigation = ({onClick}: Props) => {
  const location = useLocation();

  return (
    <ul className={styles.navUl} onClick={onClick}>
      {navButtons.map((button) => (
        <NavButton
          key={button.id}
          link={button.link}
          text={button.text}
          icon={button.icon}
          size={button.size}
          weight={location.pathname.includes(button.link) ? 'fill' : 'regular'}
        />
      ))}
    </ul>
  );
};

export default Navigation;
