import styles from './ProgressBar.module.css';
import Indicator from './Indicator/Indicator';

interface Props {
  progress?: number;
}

const ProgressBar = ({ progress }: Props) => {
  const clampedProgress = Math.min(100, Math.max(0, progress as number));

  return (
    <div className={styles.container}>
      <Indicator />
      <div className={styles.progress}>
        <p className={styles.xp}>10xp</p>
        <div className={styles.wrapper}>
          <div
            className={styles.progressBar}
            style={{ width: `${clampedProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
