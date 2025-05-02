import styles from './ProgressBar.module.css';

interface Props {
  progress?: number;
  userXp?: number;
  userLevel: number;
}

const ProgressBar = ({ progress, userXp, userLevel }: Props) => {
  const clampedProgress = Math.min(100, Math.max(0, progress as number));

  return (
    <div className={styles.progress}>
      <p className={styles.xp}>{userXp}xp</p>
      <div className={styles.wrapper}>
        <div
          className={styles.progressBar}
          style={{
            width: `${clampedProgress}%`,
            backgroundColor:
              userLevel === 1
                ? '#BBFCDC'
                : userLevel === 2
                ? '#FCF9BB'
                : userLevel === 3
                ? '#E6BBFC'
                : '#BBF2FC',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
