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
      <div className={styles.logo}>
        <Lottie
          animationData={logo}
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      {type === 'full' ? <p>delicium</p> : <></>}
    </div>
  );
};

export default Logo;
