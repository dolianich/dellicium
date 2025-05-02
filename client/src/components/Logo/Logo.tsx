import logo from '../../assets/logo.json';
import styles from './Logo.module.css';
import Lottie from 'lottie-react';

interface Props {
  type?: string;
  onClick?: () => void;
}

const Logo = ({ type, onClick }: Props) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={type === 'full' ? styles.logo : styles.logoS}>
        <Lottie
          animationData={logo}
          className={type === 'full' ? styles.animation : styles.animationS}
        />
      </div>
      {type === 'full' ? <p>delicium</p> : <></>}
    </div>
  );
};

export default Logo;
