import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.css';
import { Icon } from '@phosphor-icons/react';

interface Props {
  text: string;
  icon: Icon;
  link: string;
  size?: number;
  weight?: 'regular' | 'fill';
  state: 'selected' | 'default';
}

const NavButton = ({
  text,
  icon: Icon,
  link,
  size,
  weight,
  state,
}: Props) => {
  const buttonClass = state ? styles[state] : styles.default;
  return (
    <NavLink to={link} className={styles.linkRoot}>
      <Icon size={size} weight={weight} />
      {text}
    </NavLink>
  );
};

export default NavButton;
