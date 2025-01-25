import styles from './Navigation.module.css';
import {
  SquaresFour,
  Bell,
  UsersThree,
  Storefront,
  Toolbox,
} from '@phosphor-icons/react';

const navButtons = [
  { id: 1, text: 'Discover', icon: SquaresFour, link: '/', size: 20 },
  { id: 2, text: 'Notifications', icon: SquaresFour, link: '/notifications', size: 20 },
  { id: 3, text: 'Models', icon: SquaresFour, link: '/models', size: 20 },
  { id: 4, text: 'Market', icon: SquaresFour, link: '/market', size: 20 },
  { id: 5, text: 'Assets', icon: SquaresFour, link: '/assets', size: 20 },
];

const Navigation = () => {
  return <ul></ul>;
};

export default Navigation;
