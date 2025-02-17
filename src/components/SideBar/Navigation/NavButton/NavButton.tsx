import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.css';
import { Icon } from '@phosphor-icons/react';

interface Props {
  text: string;
  icon: Icon;
  link: string;
  size?: number;
  weight?: 'regular' | 'fill';
  direction?: string;
}

const NavButton = ({
  text,
  icon: Icon,
  link,
  size,
  weight,
  direction,
}: Props) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => {
        return isActive && direction === 'horizontal'
          ? styles.selected
          : !isActive && direction === 'horizontal'
          ? styles.default
          : isActive && direction === 'vertical'
          ? styles.selectedVertical
          : styles.defaultVertical;
      }}
    >
      <Icon size={size} weight={weight} />
      {text}
    </NavLink>
  );
};

export default NavButton;
