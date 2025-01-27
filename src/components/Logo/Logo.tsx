import logo from '../../assets/logo_dark.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <p>delicium</p>
    </div>
  );
};

export default Logo;
