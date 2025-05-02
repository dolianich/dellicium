import styles from './Pending.module.css';
import Lottie from 'lottie-react';
import devAnim from '../../../../assets/animations/devAnim.json';

const Pending = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={devAnim}/>
    </div>
  );
};

export default Pending;
