import styles from './ProgressBar.module.css';

interface Props {
  progress?: number;
}

const ProgressBar = ({ progress }: Props) => {
  const clampedProgress = Math.min(100, Math.max(0, progress as number));

  return (
    
      <div className={styles.progress}>
        <p className={styles.xp}>{progress}xp</p>
        <div className={styles.wrapper}>
          <div
            className={styles.progressBar}
            style={{ width: `${clampedProgress}%` }}
          ></div>
        </div>
      </div>
  );
};

export default ProgressBar;
