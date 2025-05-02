import styles from './Development.module.css';
import Lottie from 'lottie-react';
import devAnim from '../../assets/animations/devAnim.json';

const Development = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={devAnim} />
      <p className={styles.text}>
        This page <br />
        is under development
      </p>
    </div>
  );
};

export default Development;
