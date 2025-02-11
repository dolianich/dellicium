import styles from './ProgressBar.module.css';
import Indicator from './Indicator/Indicator';

const ProgressBar = () => {
  return (
    <div className={styles.container}>
      <Indicator />
      <div className={styles.progress}>
        <p className={styles.xp}>10xp</p>
        <div className={styles.wrapper}>
          <div className={styles.progressBar} style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
