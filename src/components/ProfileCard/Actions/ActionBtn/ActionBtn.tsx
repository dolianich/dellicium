import styles from './ActionBtn.module.css';

interface Props {
  title: string;
  subtitle: string;
}

const ActionBtn = ({ title, subtitle }: Props) => {
  return (
    <button className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.animContainer}></div>
    </button>
  );
};

export default ActionBtn;
