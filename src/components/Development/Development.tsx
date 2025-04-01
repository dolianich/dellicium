import styles from './Development.module.css';
import Lottie from 'lottie-react';
import devAnim from '../../assets/animations/devAnim.json';

const Development = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={devAnim} />
    </div>
  );
};

export default Development;
