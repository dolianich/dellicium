import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.css';
import { Icon } from '@phosphor-icons/react';

interface Props {
  text: string;
  icon: Icon;
  link: string;
  size?: number;
  weight?: 'regular' | 'fill';
}

const NavButton = ({ text, icon: Icon, link, size, weight }: Props) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => {
        return isActive ? styles.selected : styles.default;
      }}
    >
      <Icon size={size} weight={weight} />
      {text}
    </NavLink>
  );
};

export default NavButton;
