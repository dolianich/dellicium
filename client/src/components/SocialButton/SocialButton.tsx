import styles from './SocialButton.module.css';
import { Link } from 'react-router-dom';
import { LinkSimple, XLogo, InstagramLogo } from '@phosphor-icons/react';

interface Props {
  type?: string;
  to: string;
}

const SocialButton = ({ type, to }: Props) => {
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
    >
      {type === 'ig' ? (
        <InstagramLogo size={20} weight="regular" />
      ) : type === 'x' ? (
        <XLogo size={20} weight="regular" />
      ) : (
        <LinkSimple size={20} weight="regular" />
      )}
    </Link>
  );
};

export default SocialButton;
