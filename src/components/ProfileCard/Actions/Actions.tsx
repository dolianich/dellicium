import styles from './Actions.module.css';
import DonateBtn from './DonateBtn/DonateBtn';

const Actions = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.actions}>actions</h2>
      <div className={styles.donations}>
        <DonateBtn type="tips" /> <DonateBtn type="gift" />
      </div>
    </div>
  );
};

export default Actions;
