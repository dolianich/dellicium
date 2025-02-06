import styles from './DonateBtn.module.css';
import { Coins, CaretRight } from '@phosphor-icons/react';

const DonateBtn = () => {
  return (
    <button className={styles.tips}>
      <div className={styles.iconContainer}>
        <Coins size={20} weight="regular" />
      </div>
      <h3 className={styles.text}>send tips</h3>
      <div className={styles.arrow}>
        <CaretRight size={20} />
      </div>
    </button>
  );
};

export default DonateBtn;
