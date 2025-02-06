import styles from './Actions.module.css';
import DonateBtn from './DonateBtn/DonateBtn';

const Actions = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.actions}>actions</h2>
      <div><DonateBtn /> <DonateBtn /></div>
    </div>
  );
};

export default Actions;
