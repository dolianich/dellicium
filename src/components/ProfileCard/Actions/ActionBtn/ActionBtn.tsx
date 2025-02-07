import styles from './ActionBtn.module.css';

const ActionBtn = () => {
  return (
    <button className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>custom</h3>
        <p className={styles.subtitle}>custom content request</p>
      </div>
      <div className={styles.animContainer}></div>
    </button>
  );
};

export default ActionBtn;
