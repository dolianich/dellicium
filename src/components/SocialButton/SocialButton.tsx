import styles from './SocialButton.module.css';
import { Link } from 'react-router-dom';
import { LinkSimple, XLogo, InstagramLogo } from '@phosphor-icons/react';

const SocialButton = () => {
  return <Link to="/" target="_blank" className={styles.btn}>
    <LinkSimple size={20} weight='regular'/>
  </Link>;
};

export default SocialButton;
