import styles from './DonateBtn.module.css';
import { HandCoins } from '@phosphor-icons/react';

const DonateBtn = () => {
  return (
    <button className={styles.btn}>
      <HandCoins size={20} weight="regular" />
    </button>
  );
};

export default DonateBtn;
