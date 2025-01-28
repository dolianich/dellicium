import logo from '../../assets/logo.json';
import styles from './Logo.module.css';
import Lottie from 'lottie-react';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Lottie
          animationData={logo}
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      <p>delicium</p>
    </div>
  );
};

export default Logo;
